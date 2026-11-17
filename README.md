# Mattbuilds

A static site for Matthew Boumitry’s Shelburne precast plant build journal. Open `public/index.html` to preview the site from the extracted files. The HTML files contain the page copy, and `public/assets/site.css` controls the shared design.

## Deploy to Vercel

Import this project folder into Vercel, or deploy it from that folder with the Vercel CLI. The checked-in configuration serves `public/` with no framework or build step.

## Enable Vercel Web Analytics

1. In your Vercel project, open **Analytics** and select **Enable**.
2. Copy the URL used in the `src` attribute of Vercel's HTML setup snippet.
3. Set `analyticsScriptUrl` at the top of `public/assets/site.js` to that URL.
4. Redeploy, visit your deployed site, and check the Analytics dashboard.

Vercel setup guide: https://vercel.com/docs/analytics/quickstart

## Contact and newsletter forms

Both forms send to the same Formspree endpoint using native HTML POST with a vanilla JavaScript enhancement for in-page feedback. The hidden `form_type` field labels each submission as `contact` or `newsletter`. Contact submissions include a name, reply email, and message. Newsletter submissions include the subscriber’s email.

Formspree records the signup requests. Sending the weekly newsletter requires a mailing list or a newsletter integration on the Formspree side. Confirm your notification recipient and any domain restrictions in the Formspree dashboard before publishing.
