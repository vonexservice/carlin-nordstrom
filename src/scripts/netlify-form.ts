// Netlify Forms: save the submission with fetch, then send the visitor to the
// site's own Thank You page. Netlify otherwise shows its plain default
// "Thank you!" page. If anything fails, fall back to a normal form submit.
const SUCCESS_PATH = '/thank-you/';

document.querySelectorAll<HTMLFormElement>('form[data-netlify="true"]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = button?.textContent ?? '';
    if (button) {
      button.disabled = true;
      button.textContent = 'Sending...';
    }

    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!response.ok) throw new Error(`Form post failed: ${response.status}`);
      window.location.assign(SUCCESS_PATH);
    } catch {
      if (button) {
        button.disabled = false;
        button.textContent = label;
      }
      form.submit();
    }
  });
});
