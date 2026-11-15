// Vercel Web Analytics (HTML setup — no @vercel/analytics package)
// Enable Web Analytics in the Vercel project, then redeploy.
const isLocalPreview =
  location.protocol === 'file:' ||
  location.hostname === 'localhost' ||
  location.hostname === '127.0.0.1';

if (!isLocalPreview) {
  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  const analyticsScript = document.createElement('script');
  analyticsScript.defer = true;
  analyticsScript.src = '/_vercel/insights/script.js';
  document.head.append(analyticsScript);
}

// Keep the HTML POST as a fallback when JavaScript is unavailable.
document.querySelectorAll('[data-formspree]').forEach((form) => {
  const status = form.querySelector('[role="status"]');
  const button = form.querySelector('button[type="submit"]');
  const isNewsletter = form.dataset.formspree === 'newsletter';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;

    button.disabled = true;
    status.removeAttribute('data-error');
    status.textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        status.setAttribute('data-error', '');
        status.textContent = result?.errors?.[0]?.message || 'Couldn’t submit the form. Please try again.';
        return;
      }

      form.reset();
      status.textContent = isNewsletter ? 'Thanks! Your signup was received.' : 'Thanks! Your message was sent.';
    } catch {
      status.setAttribute('data-error', '');
      status.textContent = 'Couldn’t connect. Please check your connection and try again.';
    } finally {
      button.disabled = false;
    }
  });
});

const marquee = document.querySelector('[data-marquee]');
if (marquee) {
  const track = marquee.querySelector('.quote-track');
  const duplicate = track.querySelector('.quote-list').cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  track.append(duplicate);

  marquee.setAttribute('data-animated', '');
}
