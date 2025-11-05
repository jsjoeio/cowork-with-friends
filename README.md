# Cowork With Friends

A website for Cowork With Friends groups across different locations.

## Features

- 📅 **Real-time Event Display**: Automatically shows upcoming events from Google Calendar on group pages
- 🏢 **Multiple Groups**: Support for different coworking groups in various locations
- 📱 **Responsive Design**: Mobile-friendly design built with Tailwind CSS
- ⚡ **Fast Performance**: Built with Astro for optimal performance

## Google Calendar Integration

This site can display upcoming events from public Google Calendars on both the main page and individual group pages.

### How It Works

1. **Public Calendars**: Events are fetched from public Google Calendars using the Google Calendar API
2. **Automatic Updates**: The upcoming event is automatically fetched when users visit the page
3. **Group-Specific Events**: Each group can have its own calendar ID configured

### Setup Instructions

#### 1. Create a Public Google Calendar

1. Go to [Google Calendar](https://calendar.google.com)
2. Create a new calendar or use an existing one
3. Make the calendar public:
   - Open calendar settings
   - Under "Access permissions", check "Make available to public"
   - Save changes
4. Get the Calendar ID:
   - In calendar settings, scroll to "Integrate calendar"
   - Copy the "Calendar ID" (looks like an email address)

#### 2. Get a Google Calendar API Key (Optional but Recommended)

For better rate limits and reliability:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Calendar API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
   - (Optional) Restrict the key to Google Calendar API only

#### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```sh
   cp .env.example .env
   ```

2. Add your API key to `.env`:
   ```
   PUBLIC_GOOGLE_CALENDAR_API_KEY=your_api_key_here
   ```

#### 4. Add Calendar ID to Group Content

Edit your group's markdown file in `src/content/groups/`:

```yaml
---
name: "Your Group Name"
# ... other fields ...
calendarId: "your-calendar-id@group.calendar.google.com"
---
```

#### 5. Update Main Page Calendar (Optional)

To change which calendar appears on the main page, edit `src/pages/index.astro`:

```typescript
const scottsdaleCalendarId = "your-calendar-id@group.calendar.google.com"
```

### Notes

- The API key is optional for public calendars but recommended for better rate limits
- Without an API key, the Calendar API has lower rate limits
- Calendar events are fetched client-side when the page loads
- Only the next upcoming event is displayed

## Development

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
```

## Preview

```sh
npm run preview
```

## Technology Stack

- [Astro](https://astro.build) - Static site framework
- [React](https://reactjs.org/) - UI components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Google Calendar API](https://developers.google.com/calendar) - Event data

For complete Astro + Tailwind setup instructions, see the [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

