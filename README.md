# Carlin Nordstrom Website

## Google Reviews

The Google Reviews shown on the Testimonials page are static content — real reviews copied in as testimonial entries (`src/content/testimonials/google-*.md`). There is no live API call, no API key, and no Netlify environment variables involved. To add or update a review, edit or add a markdown file in that folder with `role: "Google Review"`.
