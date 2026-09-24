// Porch status: the porch runs on Milton time, open from 8am until sold out.
(function porchStatus() {
  const el = document.querySelector('[data-porch-status]');
  const text = document.querySelector('[data-porch-status-text]');
  if (!el || !text) return;

  let hour;
  try {
    hour = Number(new Intl.DateTimeFormat('en-CA', {
      hour: 'numeric', hourCycle: 'h23', timeZone: 'America/Toronto'
    }).format(new Date()));
  } catch (e) {
    return; // keep the static fallback text
  }

  if (hour >= 8 && hour < 22) {
    text.textContent = 'The porch is open today, until sold out';
  } else {
    el.classList.add('is-closed');
    text.textContent = 'The porch opens at 8am';
  }
})();

// Copy the e-Transfer number.
function legacyCopy(value) {
  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.appendChild(field);
  field.select();
  const ok = document.execCommand('copy');
  field.remove();
  return ok;
}

document.querySelectorAll('[data-copy]').forEach((btn) => {
  const original = btn.textContent;
  btn.addEventListener('click', async () => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      copied = true;
    } catch (e) {
      copied = legacyCopy(btn.dataset.copy);
    }
    if (copied) {
      btn.textContent = 'Copied ✓';
      btn.classList.add('is-copied');
    } else {
      btn.textContent = btn.dataset.copy;
    }
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('is-copied');
    }, 2200);
  });
});
