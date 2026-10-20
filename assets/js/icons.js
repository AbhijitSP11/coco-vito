/* Coco Vito — dish miniatures.
   ---------------------------------------------------------------------------
   Small dimensional renders, drawn as SVG: every object gets a cast shadow, a
   gradient body lit from the upper left, an elliptical top where it has one,
   and a highlight. At 50-60px they read as little clay models rather than
   flat icons.

   These are a stand-in. To use real 3D renders instead, drop a PNG (ideally
   transparent, square, 256px) into assets/img/ and set `image` on the item in
   menu-data.js — the render replaces the vector for that row, and anything
   without one keeps its vector. See 3D-RENDER-PROMPTS.md for how to make them.

   Palette is the site's: cream, olive, matcha, tan, dark cocoa. Deliberately
   restrained — full-colour food illustrations would fight the olive and white.
   --------------------------------------------------------------------------- */

window.COCO_ICON_DEFS =
  '<linearGradient id="cvCream" x1="0" y1="0" x2=".3" y2="1">' +
    '<stop offset="0" stop-color="#FCFBF6"/><stop offset="1" stop-color="#D5CEBA"/></linearGradient>' +
  '<linearGradient id="cvOlive" x1="0" y1="0" x2=".35" y2="1">' +
    '<stop offset="0" stop-color="#9DB76D"/><stop offset="1" stop-color="#46562E"/></linearGradient>' +
  '<linearGradient id="cvMatcha" x1="0" y1="0" x2=".3" y2="1">' +
    '<stop offset="0" stop-color="#B3D081"/><stop offset="1" stop-color="#5F7E33"/></linearGradient>' +
  '<linearGradient id="cvTan" x1="0" y1="0" x2=".3" y2="1">' +
    '<stop offset="0" stop-color="#E8CE9E"/><stop offset="1" stop-color="#A67F49"/></linearGradient>' +
  '<linearGradient id="cvTan2" x1="0" y1="0" x2=".3" y2="1">' +
    '<stop offset="0" stop-color="#D4B07A"/><stop offset="1" stop-color="#8A6436"/></linearGradient>' +
  '<linearGradient id="cvDark" x1="0" y1="0" x2=".3" y2="1">' +
    '<stop offset="0" stop-color="#604A33"/><stop offset="1" stop-color="#251C12"/></linearGradient>' +
  '<linearGradient id="cvGlass" x1="0" y1="0" x2="1" y2="0">' +
    '<stop offset="0" stop-color="#FFFFFF" stop-opacity=".42"/>' +
    '<stop offset=".45" stop-color="#FFFFFF" stop-opacity=".1"/>' +
    '<stop offset="1" stop-color="#FFFFFF" stop-opacity=".34"/></linearGradient>' +
  '<radialGradient id="cvDrop" cx=".5" cy=".5" r=".5">' +
    '<stop offset="0" stop-color="#1F2A14" stop-opacity=".3"/>' +
    '<stop offset="1" stop-color="#1F2A14" stop-opacity="0"/></radialGradient>';

/* shared bits */
var S  = '<ellipse cx="32" cy="55" rx="19" ry="4.4" fill="url(#cvDrop)"/>';          // cast shadow
var HI = ' fill="#FFFFFF" opacity=".3"';                                             // highlight

window.COCO_ICONS = {

  /* cup on a saucer — lattes, hot chocolate */
  cup:
    S +
    '<ellipse cx="32" cy="50" rx="17.5" ry="5" fill="url(#cvCream)"/>' +
    '<ellipse cx="32" cy="48.4" rx="14" ry="3.8" fill="#FFFFFF" opacity=".55"/>' +
    '<path d="M45.5 27c6.4.6 8 9.8.8 12.6" fill="none" stroke="#CEC7B2" stroke-width="3.4" stroke-linecap="round"/>' +
    '<path d="M17.5 24.5h29l-3 17.6A7 7 0 0 1 36.6 48h-9.2a7 7 0 0 1-6.9-5.9Z" fill="url(#cvCream)"/>' +
    '<path d="M37 24.5h9.5l-3 17.6A7 7 0 0 1 36.6 48h-3c2.6-6.4 3.4-14.6 3.4-23.5Z" fill="#1F2A14" opacity=".08"/>' +
    '<ellipse cx="32" cy="24.5" rx="14.5" ry="4.6" fill="url(#cvTan)"/>' +
    '<ellipse cx="28.5" cy="23.4" rx="6.4" ry="1.9"' + HI + '/>' +
    '<path d="M17.5 24.5a14.5 4.6 0 0 1 29 0" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity=".7"/>',

  /* tall glass over ice — iced drinks */
  iced:
    S +
    '<path d="M21 14h22l-2.8 31.5A4 4 0 0 1 36.2 49h-8.4a4 4 0 0 1-4-3.5Z" fill="url(#cvMatcha)"/>' +
    '<path d="M21 14h22l-1 11H22Z" fill="#FFFFFF" opacity=".34"/>' +
    '<path d="M21 14h22l-2.8 31.5A4 4 0 0 1 36.2 49h-8.4a4 4 0 0 1-4-3.5Z" fill="url(#cvGlass)"/>' +
    '<path d="M26.5 21 25 44" stroke="#FFFFFF" stroke-width="2.4" opacity=".4" stroke-linecap="round"/>' +
    '<path d="M27.5 24.5 31 18.5l5 2.6-3.4 6Z" fill="#FFFFFF" opacity=".5"/>' +
    '<path d="M31 33.5l4.4-4.2 3.6 3.4-4.4 4.2Z" fill="#FFFFFF" opacity=".42"/>' +
    '<ellipse cx="32" cy="14" rx="11" ry="3.2" fill="#FFFFFF" opacity=".75"/>' +
    '<path d="M39 8.5 34.5 17" stroke="#8A6436" stroke-width="2.6" stroke-linecap="round"/>',

  /* tall glass, carbonated — Fun With Coffee */
  fizz:
    S +
    '<path d="M21 14h22l-2.8 31.5A4 4 0 0 1 36.2 49h-8.4a4 4 0 0 1-4-3.5Z" fill="#ECEFE4"/>' +
    '<path d="M22.6 21.5h18.8l-2 24A4 4 0 0 1 36.2 49h-8.4a4 4 0 0 1-4-3.5Z" fill="url(#cvDark)"/>' +
    '<ellipse cx="32" cy="21.5" rx="9.4" ry="2.6" fill="#7A5F42"/>' +
    '<path d="M27 26.5 31.5 22l5 2.4-3.6 5.4Z" fill="#FFFFFF" opacity=".45"/>' +
    '<path d="M32 34.5l4.6-3.6 3.2 3.6-4.2 3.8Z" fill="#FFFFFF" opacity=".34"/>' +
    '<circle cx="28" cy="32" r="1.5" fill="#FFFFFF" opacity=".55"/>' +
    '<circle cx="30" cy="39" r="1.2" fill="#FFFFFF" opacity=".45"/>' +
    '<circle cx="36" cy="42" r="1.5" fill="#FFFFFF" opacity=".4"/>' +
    '<path d="M26 17 24.4 44" stroke="#FFFFFF" stroke-width="2.8" opacity=".55" stroke-linecap="round"/>' +
    '<path d="M21 14h22l-2.8 31.5A4 4 0 0 1 36.2 49h-8.4a4 4 0 0 1-4-3.5Z" fill="url(#cvGlass)"/>' +
    '<ellipse cx="32" cy="14" rx="11" ry="3.2" fill="#FFFFFF" opacity=".8"/>' +
    '<ellipse cx="32" cy="14" rx="11" ry="3.2" fill="none" stroke="#C9CDBC" stroke-width="1.1"/>',

  /* chawan and chasen — matcha */
  matcha:
    S +
    '<path d="M14 28h36a18 18 0 0 1-36 0Z" fill="url(#cvCream)"/>' +
    '<path d="M36 28h14a18 18 0 0 1-14 17.2Z" fill="#1F2A14" opacity=".09"/>' +
    '<ellipse cx="32" cy="28" rx="18" ry="5.4" fill="url(#cvMatcha)"/>' +
    '<ellipse cx="27" cy="26.6" rx="7" ry="2.1"' + HI + '/>' +
    '<path d="M44 23 48 9" stroke="#D8C9A6" stroke-width="3.2" stroke-linecap="round"/>' +
    '<path d="M44.6 16.4c2.4.8 4.6.6 6.6-.4" fill="none" stroke="#D8C9A6" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M45.6 12.4c1.8.6 3.4.5 4.8-.2" fill="none" stroke="#D8C9A6" stroke-width="1.8" stroke-linecap="round"/>',

  /* one scoop on a dish — gelato flavours */
  scoop:
    S +
    '<ellipse cx="32" cy="45.5" rx="18" ry="5.2" fill="url(#cvCream)"/>' +
    '<ellipse cx="32" cy="44" rx="14.5" ry="4" fill="#FFFFFF" opacity=".55"/>' +
    '<path d="M18 32c0-8.4 6.4-15 14-15s14 6.6 14 15c0 4-3 7.2-7 8.4-2.2.7-4.6 1-7 1s-4.8-.3-7-1c-4-1.2-7-4.4-7-8.4Z" fill="url(#cvTan)"/>' +
    '<path d="M33 17.1c7.1.5 13 6.8 13 14.9 0 4-3 7.2-7 8.4-1.4.4-2.9.7-4.4.9 4.8-6.8 5.7-17.6-1.6-24.2Z" fill="#1F2A14" opacity=".1"/>' +
    '<path d="M20.5 27c4.6 3.4 9.4 4.6 15 3.6" fill="none" stroke="#8A6436" stroke-width="1.5" opacity=".4" stroke-linecap="round"/>' +
    '<path d="M19.5 34.5c5.6 3.2 11.6 3.8 18 1.8" fill="none" stroke="#8A6436" stroke-width="1.5" opacity=".38" stroke-linecap="round"/>' +
    '<path d="M41.5 23.5c3 3.4 2.6 8-1 10" fill="none" stroke="#8A6436" stroke-width="1.5" opacity=".35" stroke-linecap="round"/>' +
    '<ellipse cx="26" cy="23.5" rx="5.2" ry="3.4" transform="rotate(-30 26 23.5)"' + HI + '/>',

  /* cone with a scoop — Choose Your Base */
  cone:
    S +
    '<path d="M18.5 30h27L32 54Z" fill="url(#cvTan2)"/>' +
    '<path d="M32 30h13.5L32 54Z" fill="#1F2A14" opacity=".12"/>' +
    '<path d="M22 34.5 30.5 42M30 34.5 38 42M26.5 43 32 48M37 34.5 33 39" stroke="#FFFFFF" stroke-width="1.2" opacity=".3"/>' +
    '<path d="M18.5 30h27l-1.6 3H20.1Z" fill="#8A6436" opacity=".45"/>' +
    '<path d="M19 28.5c0-7.6 5.8-13.5 13-13.5s13 5.9 13 13.5c0 2.6-1.8 4.4-4.6 5.2-2.4.7-5.2 1-8.4 1s-6-.3-8.4-1c-2.8-.8-4.6-2.6-4.6-5.2Z" fill="url(#cvCream)"/>' +
    '<path d="M33 15c6.7.5 12 6.2 12 13.5 0 2.6-1.8 4.4-4.6 5.2-1.2.4-2.6.6-4.1.8 4.6-6.4 5.1-16-3.3-19.5Z" fill="#1F2A14" opacity=".1"/>' +
    '<path d="M21.5 24.5c4.2 3 8.6 4 13.6 3" fill="none" stroke="#BDB49C" stroke-width="1.4" opacity=".55" stroke-linecap="round"/>' +
    '<ellipse cx="26.5" cy="21" rx="4.6" ry="3" transform="rotate(-30 26.5 21)"' + HI + '/>',

  /* croissant — butter croissant, gelato x croissant */
  croissant:
    S +
    '<ellipse cx="11.5" cy="38" rx="6.6" ry="4.6" transform="rotate(-32 11.5 38)" fill="url(#cvTan2)"/>' +
    '<ellipse cx="52.5" cy="38" rx="6.6" ry="4.6" transform="rotate(32 52.5 38)" fill="url(#cvTan2)"/>' +
    '<ellipse cx="19.5" cy="32" rx="8.4" ry="7.4" transform="rotate(-14 19.5 32)" fill="url(#cvTan)"/>' +
    '<ellipse cx="44.5" cy="32" rx="8.4" ry="7.4" transform="rotate(14 44.5 32)" fill="url(#cvTan)"/>' +
    '<ellipse cx="32" cy="28.5" rx="10.4" ry="9.4" fill="url(#cvTan)"/>' +
    '<path d="M24.5 22.5c-1.4 5-1.4 9.6 0 13.8" fill="none" stroke="#8A6436" stroke-width="1.5" opacity=".45" stroke-linecap="round"/>' +
    '<path d="M39.5 22.5c1.4 5 1.4 9.6 0 13.8" fill="none" stroke="#8A6436" stroke-width="1.5" opacity=".45" stroke-linecap="round"/>' +
    '<path d="M15.5 36c-1.6 1.6-3.4 2.4-5.4 2.4" fill="none" stroke="#8A6436" stroke-width="1.4" opacity=".4" stroke-linecap="round"/>' +
    '<path d="M48.5 36c1.6 1.6 3.4 2.4 5.4 2.4" fill="none" stroke="#8A6436" stroke-width="1.4" opacity=".4" stroke-linecap="round"/>' +
    '<ellipse cx="28" cy="23" rx="5.6" ry="3.2" transform="rotate(-24 28 23)"' + HI + '/>',

  /* cookie seen at a tilt — brookie, gelato x cookie */
  cookie:
    S +
    '<ellipse cx="32" cy="34.4" rx="18" ry="11.5" fill="#7A5932"/>' +
    '<ellipse cx="32" cy="32" rx="18" ry="11.5" fill="url(#cvTan2)"/>' +
    '<ellipse cx="27" cy="28" rx="7" ry="3.4" transform="rotate(-10 27 28)"' + HI + '/>' +
    '<ellipse cx="22.5" cy="32.5" rx="2.1" ry="1.3" fill="#3B2A16"/>' +
    '<ellipse cx="31" cy="27.5" rx="1.9" ry="1.2" fill="#3B2A16"/>' +
    '<ellipse cx="39.5" cy="30" rx="2.1" ry="1.3" fill="#3B2A16"/>' +
    '<ellipse cx="29" cy="36" rx="2" ry="1.25" fill="#3B2A16"/>' +
    '<ellipse cx="38" cy="36.5" rx="1.7" ry="1.1" fill="#3B2A16"/>' +
    '<ellipse cx="44" cy="34" rx="1.5" ry="1" fill="#3B2A16" opacity=".8"/>',

  /* layered wedge — tiramisu, cheesecake */
  slice:
    S +
    '<path d="M12 44 32 36l20 8-20 8Z" fill="url(#cvCream)"/>' +
    '<path d="M12 28v16l20 8V36Z" fill="url(#cvTan2)"/>' +
    '<path d="M52 28v16l-20 8V36Z" fill="url(#cvTan)"/>' +
    '<path d="M12 28 32 20l20 8-20 8Z" fill="url(#cvDark)"/>' +
    '<path d="M12 33v4l20 8v-4Z" fill="#FFFFFF" opacity=".4"/>' +
    '<path d="M52 33v4l-20 8v-4Z" fill="#FFFFFF" opacity=".3"/>' +
    '<path d="M18 26.6 32 21l5 2-14 5.6Z"' + HI + '/>',

  /* glass with a scoop on top — affogato */
  affogato:
    S +
    '<path d="M22 28h20l-2.4 18A4 4 0 0 1 35.6 49h-7.2a4 4 0 0 1-4-3Z" fill="#ECEFE4"/>' +
    '<path d="M23.4 33.5h17.2l-1 12.5A4 4 0 0 1 35.6 49h-7.2a4 4 0 0 1-4-3Z" fill="url(#cvDark)"/>' +
    '<path d="M26 31 25 46" stroke="#FFFFFF" stroke-width="2.4" opacity=".5" stroke-linecap="round"/>' +
    '<path d="M22 28h20l-2.4 18A4 4 0 0 1 35.6 49h-7.2a4 4 0 0 1-4-3Z" fill="url(#cvGlass)"/>' +
    '<ellipse cx="32" cy="28" rx="10" ry="3" fill="#E6E9DC"/>' +
    '<circle cx="32" cy="21" r="9.5" fill="url(#cvCream)"/>' +
    '<path d="M33 11.6c4.9.5 8.5 4.6 8.5 9.4a9.5 9.5 0 0 1-8.5 9.4c5-5.2 5-13.6 0-18.8Z" fill="#1F2A14" opacity=".09"/>' +
    '<path d="M24.6 17.6c2-2.6 5.6-4.1 9.3-3.5 3.6.6 6.2 3 7.1 5.9-2.6 1.9-6.2 2.9-9.6 2.6-3-.3-5.4-2-6.8-5Z" fill="#4A3522" opacity=".82"/>' +
    '<path d="M26.4 21.8c-.6 2.2-.3 4.2.9 6" fill="none" stroke="#4A3522" stroke-width="2.2" opacity=".7" stroke-linecap="round"/>' +
    '<path d="M38 21.4c.4 2-.2 3.8-1.6 5.2" fill="none" stroke="#4A3522" stroke-width="2" opacity=".6" stroke-linecap="round"/>' +
    '<ellipse cx="27.4" cy="16.4" rx="3" ry="1.9" transform="rotate(-28 27.4 16.4)" fill="#FFFFFF" opacity=".22"/>',

  /* carton — oat and almond milk */
  milk:
    S +
    '<path d="M20 22 32 17l12 5v23l-12 5-12-5Z" fill="url(#cvCream)"/>' +
    '<path d="M32 22v28l12-5V22Z" fill="#1F2A14" opacity=".12"/>' +
    '<path d="M20 22 32 17l12 5-12 5Z" fill="#FFFFFF" opacity=".75"/>' +
    '<path d="M20 22 32 10l12 12-12-5Z" fill="url(#cvCream)"/>' +
    '<path d="M32 10v7l12 5Z" fill="#1F2A14" opacity=".1"/>' +
    '<rect x="23.5" y="31" width="9" height="9" rx="1" fill="url(#cvOlive)" opacity=".85"/>',

  /* slab — Pascati chocolate */
  choc:
    S +
    '<path d="M13 27 32 19.5 51 27 32 34.5Z" fill="url(#cvTan2)"/>' +
    '<path d="M13 27v10l19 7.5V34.5Z" fill="url(#cvDark)"/>' +
    '<path d="M51 27v10l-19 7.5V34.5Z" fill="#2A1E13"/>' +
    '<path d="M22.5 23.2 41.5 30.8M41.5 23.2 22.5 30.8" stroke="#4A3522" stroke-width="1.3" opacity=".75"/>' +
    '<path d="M19.5 29.6v10M25.9 32.1v10M38.1 32.1v10M44.5 29.6v10" stroke="#140E08" stroke-width="1.2" opacity=".45"/>' +
    '<path d="M32 34.5v10" stroke="#140E08" stroke-width="1.2" opacity=".4"/>' +
    '<path d="M51 27 44 29.8l-5.6-2.2L45.4 25Z" fill="url(#cvTan)"/>' +
    '<path d="M17 25.8 32 19.5l4.4 1.7-15 6Z"' + HI + '/>',

  /* split croissant with a filling — crosswich */
  crosswich:
    S +
    '<path d="M12 43.5c1.6 4 9 6.6 20 6.6s18.4-2.6 20-6.6c-3.6 1.4-7.6-.4-11.6.4-2.8.6-5.4 1-8.4 1s-5.6-.4-8.4-1c-4-.8-8-1-11.6-.4Z" fill="url(#cvTan2)"/>' +
    '<path d="M12 38c3.6-1.6 7.6.2 11.6-.8 2.8-.7 5.4-1.2 8.4-1.2s5.6.5 8.4 1.2c4 1 8-.8 11.6.8-1.6 3.6-9 5.8-20 5.8S13.6 41.6 12 38Z" fill="url(#cvMatcha)"/>' +
    '<ellipse cx="13.5" cy="33" rx="5.6" ry="4" transform="rotate(-32 13.5 33)" fill="url(#cvTan2)"/>' +
    '<ellipse cx="50.5" cy="33" rx="5.6" ry="4" transform="rotate(32 50.5 33)" fill="url(#cvTan2)"/>' +
    '<ellipse cx="21" cy="28" rx="7.6" ry="6.6" transform="rotate(-14 21 28)" fill="url(#cvTan)"/>' +
    '<ellipse cx="43" cy="28" rx="7.6" ry="6.6" transform="rotate(14 43 28)" fill="url(#cvTan)"/>' +
    '<ellipse cx="32" cy="25" rx="9.4" ry="8.4" fill="url(#cvTan)"/>' +
    '<path d="M25.5 20c-1.2 4.2-1.2 8 0 11.6" fill="none" stroke="#8A6436" stroke-width="1.4" opacity=".45" stroke-linecap="round"/>' +
    '<path d="M38.5 20c1.2 4.2 1.2 8 0 11.6" fill="none" stroke="#8A6436" stroke-width="1.4" opacity=".45" stroke-linecap="round"/>' +
    '<ellipse cx="28" cy="20.5" rx="5" ry="2.9" transform="rotate(-24 28 20.5)"' + HI + '/>'
};

/* Put the gradient definitions in the document once, so every icon can point
   at them by id instead of carrying its own copy. */
(function injectDefs() {
  function go() {
    if (document.getElementById('cv-icon-defs')) return;
    var holder = document.createElement('div');
    holder.id = 'cv-icon-defs';
    holder.setAttribute('aria-hidden', 'true');
    holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    holder.innerHTML = '<svg width="0" height="0"><defs>' + window.COCO_ICON_DEFS + '</defs></svg>';
    document.body.insertBefore(holder, document.body.firstChild);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
  else go();
})();

/* Build one as an <svg> element. */
window.cocoIcon = function (name, extraClass) {
  var inner = window.COCO_ICONS[name];
  if (!inner) return '';
  return '<svg class="ic' + (extraClass ? ' ' + extraClass : '') + '" viewBox="0 0 64 64" ' +
         'aria-hidden="true" focusable="false">' + inner + '</svg>';
};
