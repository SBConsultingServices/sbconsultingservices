/* ==========================================================================
   LOGO — the ONE place the logo is defined.
   Every page has <span class="logo" data-logo>…</span> placeholders; this
   script fills them in. To switch designs, change LOGO_STYLE below to:
     'window'   — white browser window, gold title bar, serif "B" (default)
     'monogram' — navy "Bf" monogram badge
     'growth'   — rising-bar growth icon
   To use a finished logo file instead, set LOGO_IMAGE to its path
   (e.g. 'images/logo.svg') and it will be used everywhere.
   ========================================================================== */
(function () {
  var LOGO_STYLE = 'window';
  var LOGO_IMAGE = ''; // e.g. 'images/logo.svg'
  var TAGLINE = 'Bookkeeping · Business setup · Financial support';

  var marks = {
    window:
      '<svg class="logo-mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
        '<rect x="3" y="5" width="42" height="38" rx="7" fill="#FFFFFF"/>' +
        '<path d="M3 16v-4a7 7 0 0 1 7-7h28a7 7 0 0 1 7 7v4z" fill="#22C38E"/>' +
        '<circle cx="10" cy="10.5" r="1.7" fill="#16325C"/>' +
        '<circle cx="15.5" cy="10.5" r="1.7" fill="#16325C"/>' +
        '<circle cx="21" cy="10.5" r="1.7" fill="#16325C"/>' +
        '<text x="24" y="38.5" text-anchor="middle" font-family="\'DM Serif Display\', Georgia, serif" font-size="23" fill="#16325C">B</text>' +
        '<rect x="3" y="5" width="42" height="38" rx="7" fill="none" stroke="#16325C" stroke-width="2"/>' +
        '<path d="M3 16h42" stroke="#16325C" stroke-width="1.5"/>' +
      '</svg>',
    monogram:
      '<svg class="logo-mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
        '<circle cx="24" cy="24" r="22" fill="#0F1B2D"/>' +
        '<circle cx="24" cy="24" r="18.5" fill="none" stroke="#22C38E" stroke-width="1.2"/>' +
        '<text x="24" y="31" text-anchor="middle" font-family="\'DM Serif Display\', Georgia, serif" font-size="20" fill="#22C38E">Bf</text>' +
      '</svg>',
    growth:
      '<svg class="logo-mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
        '<rect x="2" y="2" width="44" height="44" rx="11" fill="#16325C"/>' +
        '<rect x="11" y="28" width="6" height="10" rx="1.5" fill="#22C38E"/>' +
        '<rect x="21" y="21" width="6" height="17" rx="1.5" fill="#22C38E"/>' +
        '<rect x="31" y="13" width="6" height="25" rx="1.5" fill="#22C38E"/>' +
        '<path d="M10 22l9-7 6 3 11-8" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>'
  };

  function build(withTagline) {
    var mark = LOGO_IMAGE
      ? '<img class="logo-mark" src="' + LOGO_IMAGE + '" alt="" width="44" height="44">'
      : (marks[LOGO_STYLE] || marks.window);
    return mark +
      '<span class="logo-text">' +
        '<span class="logo-name">Braghiroli</span>' +
        '<span class="logo-sub">Financial Services</span>' +
        (withTagline ? '<span class="logo-tagline">' + TAGLINE + '</span>' : '') +
      '</span>';
  }

  var nodes = document.querySelectorAll('[data-logo]');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = build(nodes[i].getAttribute('data-logo') === 'tagline');
  }
})();
