import { useEffect, useState } from 'react'
import type { CalendarEvent } from '../utils/calendar'
import {
  fetchNextEvent,
  formatEventDateShort,
  formatEventTime,
} from '../utils/calendar'
import { CalIcon } from './CalIcon'
import { MapIcon } from './MapIcon'

interface UpcomingEventProps {
  calendarId: string
  apiKey?: string
  groupName?: string
}

export function UpcomingEvent({
  calendarId,
  apiKey,
  groupName,
}: UpcomingEventProps) {
  const [event, setEvent] = useState<CalendarEvent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadEvent() {
      try {
        setLoading(true)
        const nextEvent = await fetchNextEvent(calendarId, apiKey)
        setEvent(nextEvent)
      } catch (err) {
        setError('Failed to load event')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (calendarId) {
      loadEvent()
    } else {
      setLoading(false)
    }
  }, [calendarId, apiKey])

  if (loading) {
    return (
      <div className="bg-white rounded-[24px] p-6 shadow-sm">
        <p className="text-gray-600">Loading next event...</p>
      </div>
    )
  }

  if (error || !event) {
    return null // Gracefully hide if no event or error
  }

  const eventDate = formatEventDateShort(event)
  const eventTime = formatEventTime(event)

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-dark-green">
        Next {groupName ? `${groupName} ` : ''}Event
      </h3>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row items-center">
          <CalIcon />
          <div className="ml-3">
            <p className="font-semibold text-lg">{eventDate}</p>
            <p className="text-gray-600">{eventTime}</p>
          </div>
        </div>
        {event.location && (
          <div className="flex flex-row items-center">
            <MapIcon />
            <div className="ml-3">
              <p className="font-semibold">{event.location}</p>
            </div>
          </div>
        )}
        {event.summary && event.summary !== 'Cowork with Friends' && (
          <div className="mt-2">
            <p className="text-sm text-gray-700">{event.summary}</p>
          </div>
        )}
        <a
          href={event.htmlLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-dark-green font-semibold hover:underline"
        >
          View on Google Calendar →
        </a>
      </div>
    </div>
  )
}
