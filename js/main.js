/* ==========================================================================
   Braghiroli Consulting — main.js
   ========================================================================== */

/* ---------------------------------------------------------------
   [BOOKING_LINK] — paste your Calendly (or similar) link here.
   Every "Book an Appointment" button on the site uses it.
   Example: 'https://calendly.com/your-name/consultation'
   Until it is set, the buttons go to the Contact page.
   --------------------------------------------------------------- */
var BOOKING_LINK = '';

(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  /* ---------- Booking buttons ---------- */
  if (BOOKING_LINK) {
    document.querySelectorAll('[data-booking]').forEach(function (a) {
      a.href = BOOKING_LINK;
      a.target = '_blank';
      a.rel = 'noopener';
    });
    document.querySelectorAll('[data-booking-placeholder]').forEach(function (el) {
      el.hidden = true;
    });
  }

  /* ---------- Mobile navigation ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
  }

  if (header && toggle && nav) {
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    window.matchMedia('(min-width: 1000px)').addEventListener('change', function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* ---------- Contact form (Formspree) ---------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    var notConnected = form.action.indexOf('FORMSPREE_ID') !== -1;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form-status';

      if (notConnected) {
        status.classList.add('error');
        status.innerHTML = 'Our online form is being set up. Please email us at ' +
          '<a href="mailto:sdbraghiroli@gmail.com">sdbraghiroli@gmail.com</a> or call ' +
          '<a href="tel:+14153413674">415-341-3674</a>.';
        return;
      }

      var button = form.querySelector('[type="submit"]');
      button.disabled = true;
      button.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          form.reset();
          status.classList.add('success');
          status.textContent = 'Thank you! Your message has been sent. Sandra will be in touch soon.';
        })
        .catch(function () {
          status.classList.add('error');
          status.innerHTML = 'Sorry, something went wrong. Please email ' +
            '<a href="mailto:sdbraghiroli@gmail.com">sdbraghiroli@gmail.com</a> instead.';
        })
        .finally(function () {
          button.disabled = false;
          button.textContent = 'Send Message';
          status.focus();
        });
    });
  }
})();
