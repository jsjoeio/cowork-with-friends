/**
 * Utility functions for fetching and processing Google Calendar events
 */

export interface CalendarEvent {
  id: string
  summary: string
  description?: string
  start: {
    dateTime?: string
    date?: string
    timeZone?: string
  }
  end: {
    dateTime?: string
    date?: string
    timeZone?: string
  }
  location?: string
  htmlLink: string
}

/**
 * Fetches the next upcoming event from a public Google Calendar
 * @param calendarId - The Google Calendar ID (email format)
 * @param apiKey - Google Calendar API key (optional for public calendars)
 * @returns Promise containing the next event or null
 */
export async function fetchNextEvent(
  calendarId: string,
  apiKey?: string
): Promise<CalendarEvent | null> {
  try {
    const now = new Date().toISOString()
    const apiKeyParam = apiKey ? `&key=${encodeURIComponent(apiKey)}` : ''
    
    // Using Google Calendar API v3 to fetch public calendar events
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      calendarId
    )}/events?timeMin=${encodeURIComponent(now)}&orderBy=startTime&singleEvents=true&maxResults=1${apiKeyParam}`

    const response = await fetch(url)

    if (!response.ok) {
      console.error(`Failed to fetch calendar events: ${response.status}`)
      return null
    }

    const data = await response.json()

    if (data.items && data.items.length > 0) {
      return data.items[0]
    }

    return null
  } catch (error) {
    console.error('Error fetching calendar event:', error)
    return null
  }
}

/**
 * Formats a calendar event date for display
 * @param event - The calendar event
 * @returns Formatted date string
 */
export function formatEventDate(event: CalendarEvent): string {
  const startDateTime = event.start.dateTime || event.start.date
  if (!startDateTime) return 'Date TBA'

  const date = new Date(startDateTime)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  // Add time if it's a dateTime (not an all-day event)
  if (event.start.dateTime) {
    options.hour = 'numeric'
    options.minute = '2-digit'
    options.timeZoneName = 'short'
  }

  return date.toLocaleDateString('en-US', options)
}

/**
 * Gets a short formatted date for event display
 * @param event - The calendar event
 * @returns Short formatted date string (e.g., "Wed, Jan 15")
 */
export function formatEventDateShort(event: CalendarEvent): string {
  const startDateTime = event.start.dateTime || event.start.date
  if (!startDateTime) return 'TBA'

  const date = new Date(startDateTime)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', options)
}

/**
 * Gets formatted time for event display
 * @param event - The calendar event
 * @returns Formatted time string (e.g., "9:00 AM - 11:00 AM")
 */
export function formatEventTime(event: CalendarEvent): string {
  if (!event.start.dateTime) return 'All day'

  const startDate = new Date(event.start.dateTime)
  const endDate = event.end.dateTime ? new Date(event.end.dateTime) : null

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
  }

  const startTime = startDate.toLocaleTimeString('en-US', timeOptions)
  const endTime = endDate
    ? endDate.toLocaleTimeString('en-US', timeOptions)
    : ''

  return endTime ? `${startTime} - ${endTime}` : startTime
}
