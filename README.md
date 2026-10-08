# Carlin Nordstrom Website

## Google Reviews

Google Reviews are fetched during the Astro build only. The API key is used in the build process and is not sent to the browser. If a build cannot reach Google, the site uses the last cached response in `src/data/google-reviews.json`; if no valid cache exists, the Google badge and review section stay hidden.

Set these environment variables in Netlify under **Site configuration → Environment variables**:

- `GOOGLE_PLACES_API_KEY` — a Google Maps Platform API key with the Places API (New) enabled.
- `GOOGLE_PLACE_ID` — the Google Place ID for Carlin's business or profile.

After adding or changing either variable, trigger a new deploy so the static pages can refresh.

### Scheduled refreshes with a Netlify build hook

1. In the Netlify site dashboard, open **Project configuration → Build & deploy → Continuous deployment → Build hooks**.
2. Create a build hook for the production branch and copy its generated URL.
3. Add that hook to a scheduler that can send a `POST` request on the desired schedule, such as once per day or once per week.
4. Each scheduled request starts a new Netlify build, which refreshes the cached Google Reviews data when the API responds successfully.

Do not place the API key in page markup, client-side JavaScript, or public files.
