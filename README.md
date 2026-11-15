# Mattbuilds

A static site for Matthew Boumitry’s Shelburne precast plant build journal. Open `public/index.html` to preview the site from the extracted files. The HTML files contain the page copy, and `public/assets/site.css` controls the shared design.

## Deploy to Vercel

Import this project folder into Vercel, or deploy it from that folder with the Vercel CLI. The checked-in configuration serves `public/` with no framework or build step.

## Enable Vercel Web Analytics

This site uses Vercel’s **HTML** analytics setup (not the Next.js `@vercel/analytics` package). `public/assets/site.js` loads `/_vercel/insights/script.js` on your deployed domain.

1. In your Vercel project, open **Analytics** and select **Enable**.
2. Redeploy (required so Vercel adds the `/_vercel/insights/*` routes).
3. Visit the live site, click between pages, and confirm requests to `/_vercel/insights/view` in the browser network tab.
4. Open **Analytics** in the Vercel dashboard to see data (it may take a short time after the first visits).

Vercel setup guide: https://vercel.com/docs/analytics/quickstart

## Contact and newsletter forms

Both forms send to the same Formspree endpoint using native HTML POST with a vanilla JavaScript enhancement for in-page feedback. The hidden `form_type` field labels each submission as `contact` or `newsletter`. Contact submissions include a name, reply email, and message. Newsletter submissions include the subscriber’s email.

Formspree records the signup requests. Sending the weekly newsletter requires a mailing list or a newsletter integration on the Formspree side. Confirm your notification recipient and any domain restrictions in the Formspree dashboard before publishing.
