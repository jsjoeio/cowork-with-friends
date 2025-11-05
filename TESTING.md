# Testing Google Calendar Integration

This guide explains how to test the real-time event display feature.

## Quick Test with US Holidays Calendar

To quickly test the functionality without setting up your own calendar, you can use Google's public US Holidays calendar:

1. Update `src/pages/index.astro`:
   ```typescript
   const scottsdaleCalendarId = "en.usa#holiday@group.v.calendar.google.com"
   ```

2. Update `src/content/groups/scottsdale.md`:
   ```yaml
   calendarId: "en.usa#holiday@group.v.calendar.google.com"
   ```

3. Run the dev server:
   ```sh
   npm run dev
   ```

4. Visit `http://localhost:4321` to see the next US holiday displayed

## Testing with Your Own Calendar

### Step 1: Create a Test Event

1. Go to Google Calendar and create a public calendar
2. Add a test event with:
   - Title: "Cowork Session"
   - Date: Tomorrow or any future date
   - Time: 9:00 AM - 11:00 AM
   - Location: "Coffee Shop Name"
   - Description: Optional

### Step 2: Get Your Calendar ID

1. In Google Calendar, go to calendar settings
2. Scroll to "Integrate calendar"
3. Copy the "Calendar ID" (e.g., `abc123@group.calendar.google.com`)

### Step 3: Configure the Site

1. Update `src/content/groups/scottsdale.md`:
   ```yaml
   calendarId: "your-calendar-id@group.calendar.google.com"
   ```

2. (Optional) Add your API key to `.env`:
   ```
   PUBLIC_GOOGLE_CALENDAR_API_KEY=your_api_key_here
   ```

### Step 4: Test

1. Start the dev server:
   ```sh
   npm run dev
   ```

2. Visit the pages:
   - Main page: `http://localhost:4321/`
   - Scottsdale group page: `http://localhost:4321/group/scottsdale/`

3. You should see your upcoming event displayed with:
   - Event date (e.g., "Wed, Jan 15")
   - Event time (e.g., "9:00 AM - 11:00 AM")
   - Location
   - Link to view on Google Calendar

## Expected Behavior

### With Valid Calendar ID
- Shows "Loading next event..." briefly
- Displays the next upcoming event
- Shows event date, time, and location
- Provides link to view on Google Calendar

### With Invalid Calendar ID
- Shows "Loading next event..." briefly
- Component gracefully disappears (no error shown to user)
- Rest of the page works normally

### With No Calendar ID
- Component doesn't render at all
- Page works normally

## Troubleshooting

### Event Not Showing

1. **Check calendar is public**:
   - Go to calendar settings
   - Under "Access permissions", ensure "Make available to public" is checked

2. **Check event is in the future**:
   - Events in the past won't be displayed
   - Only the next upcoming event is shown

3. **Check Calendar ID format**:
   - Should look like an email address
   - Common formats:
     - `username@group.calendar.google.com`
     - `calendar-id@group.v.calendar.google.com`

4. **Check browser console for errors**:
   - Open browser DevTools (F12)
   - Look for error messages in Console tab

### API Rate Limits

Without an API key, Google Calendar API has rate limits:
- 100 requests per 100 seconds per user
- For development, this is usually sufficient
- For production, get an API key to increase limits

### CORS Issues

If you see CORS errors:
- This usually means the calendar is not public
- Make sure "Make available to public" is enabled in calendar settings

## Testing Multiple Groups

To test the Downtown Mesa group:

1. Update `src/content/groups/downtown-mesa.md`:
   ```yaml
   calendarId: "your-calendar-id@group.calendar.google.com"
   ```

2. Visit: `http://localhost:4321/group/downtown-mesa/`

Each group can have its own calendar ID.
