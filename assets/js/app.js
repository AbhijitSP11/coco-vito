/* Coco Vito — site behaviour
   -------------------------------------------------------------------------
   Order state lives in localStorage so it survives page changes and a phone
   going to sleep on the walk to the counter. Nothing is sent anywhere. */

(function () {
  'use strict';

  var STORE_KEY = 'cocovito.order.v1';
  var CODE_CHARS = 'ACDEFHJKLMNPRTUVWXY349';
  var money = function (n) { return '₹' + n.toLocaleString('en-IN'); };
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------------------------------------------------------- data */

  var CATALOG = {};
  (window.COCO_MENU || []).forEach(function (group) {
    group.items.forEach(function (item) {
      CATALOG[item.id] = { item: item, group: group };
    });
  });

  /* --------------------------------------------------------------- store */

  var Order = {
    lines: {},
    note: '',
    code: '',

    load: function () {
      try {
        var raw = localStorage.getItem(STORE_KEY);
        if (!raw) return;
        var data = JSON.parse(raw);
        if (data && typeof data === 'object') {
          this.lines = data.lines || {};
          this.note = data.note || '';
          this.code = data.code || '';
        }
      } catch (e) { /* private mode, cleared storage — start empty */ }
      // drop anything no longer on the menu
      Object.keys(this.lines).forEach(function (id) {
        if (!CATALOG[id]) delete Order.lines[id];
      }, this);
    },

    save: function () {
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify({
          lines: this.lines, note: this.note, code: this.code
        }));
      } catch (e) { /* nothing we can do; the page still works */ }
    },

    newCode: function () {
      var out = '';
      for (var i = 0; i < 4; i++) {
        out += CODE_CHARS.charAt(Math.floor(Math.random() * CODE_CHARS.length));
      }
      return out;
    },

    add: function (id, qty) {
      if (!CATALOG[id]) return;
      if (!this.code) this.code = this.newCode();
      this.lines[id] = (this.lines[id] || 0) + (qty || 1);
      if (this.lines[id] < 1) delete this.lines[id];
      this.save();
      render();
    },

    setQty: function (id, qty) {
      if (qty < 1) delete this.lines[id];
      else this.lines[id] = qty;
      if (!this.count()) this.code = '';
      this.save();
      render();
    },

    setNote: function (text) { this.note = text; this.save(); },

    clear: function () {
      this.lines = {};
      this.note = '';
      this.code = '';
      this.save();
      render();
    },

    ids: function () { return Object.keys(this.lines); },
    qty: function (id) { return this.lines[id] || 0; },
    count: function () {
      return this.ids().reduce(function (n, id) { return n + Order.lines[id]; }, 0);
    },
    total: function () {
      return Order.ids().reduce(function (sum, id) {
        return sum + CATALOG[id].item.price * Order.lines[id];
      }, 0);
    },
    asText: function () {
      var out = ['COCO VITO — Order ' + this.code, ''];
      this.ids().forEach(function (id) {
        var it = CATALOG[id].item;
        out.push(Order.lines[id] + ' x ' + it.name + '  ' + money(it.price * Order.lines[id]));
      });
      out.push('', 'Total ' + money(this.total()));
      if (this.note) out.push('', 'Note: ' + this.note);
      return out.join('\n');
    }
  };

  /* ---------------------------------------------------------- menu render */

  function buildMenu() {
    var root = $('#menuGroups');
    if (!root) return;

    (window.COCO_MENU || []).forEach(function (group) {
      var section = document.createElement('div');
      section.className = 'menu-group';
      section.id = group.id;              // so menu.html#gelato lands here
      section.dataset.group = group.id;

      var head = document.createElement('div');
      head.className = 'menu-group__head';
      head.innerHTML =
        '<h3>' + group.name + '</h3>' +
        '<span class="menu-group__count">' + group.note + '</span>';
      section.appendChild(head);

      var grid = document.createElement('div');
      grid.className = 'menu-grid';

      group.items.forEach(function (item) {
        var row = document.createElement('article');
        row.className = 'item';
        row.setAttribute('data-aos', 'fade-up');
        row.dataset.id = item.id;
        // a real 3D render if the item has one, otherwise the drawn miniature
        var art = item.image
          ? '<img src="' + item.image + '" alt="" loading="lazy" decoding="async">'
          : (window.cocoIcon ? window.cocoIcon(item.icon || 'cup') : '');

        row.innerHTML =
          '<span class="item__icon">' + art + '</span>' +
          '<div class="item__body">' +
            '<h4 class="item__name">' + item.name +
              (item.signature ? '<span class="tag">Signature</span>' : '') +
            '</h4>' +
            '<p class="item__note">' + item.note + '</p>' +
          '</div>' +
          '<div class="item__right">' +
            '<span class="item__qty" data-qty></span>' +
            '<span class="item__price">' + money(item.price) + '</span>' +
            '<button class="add" type="button" data-add="' + item.id + '" ' +
              'aria-label="Add ' + item.name + ' to order">+</button>' +
          '</div>';
        grid.appendChild(row);
      });

      section.appendChild(grid);
      root.appendChild(section);
    });

    root.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-add]');
      if (!btn) return;
      Order.add(btn.dataset.add, 1);
      btn.classList.add('is-added');
      setTimeout(function () { btn.classList.remove('is-added'); }, 450);
      toast(CATALOG[btn.dataset.add].item.name + ' added');
    });
  }

  /* The short version on the home page — links through to the menu page. */
  function buildTeaser() {
    var root = $('#menuTeaser');
    if (!root) return;

    (window.COCO_MENU || []).forEach(function (group) {
      var picks = group.items.filter(function (i) { return i.signature; }).slice(0, 3);
      if (!picks.length) picks = group.items.slice(0, 3);

      var card = document.createElement('a');
      card.className = 'teaser__card';
      card.setAttribute('data-aos', 'fade-up');
      card.href = 'menu.html#' + group.id;
      card.innerHTML =
        '<h3>' + group.name + '</h3>' +
        '<p class="teaser__note">' + group.note + '</p>' +
        '<ul class="teaser__picks">' +
          picks.map(function (i) {
            return '<li><span>' + i.name + '</span><b>' + money(i.price) + '</b></li>';
          }).join('') +
        '</ul>' +
        '<span class="teaser__more">' + group.items.length + ' on the menu</span>';
      root.appendChild(card);
    });
  }

  function buildFilters() {
    var bar = $('#menuFilters');
    if (!bar) return;

    function make(label, value, pressed) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = label;
      b.dataset.filter = value;
      b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      return b;
    }

    bar.appendChild(make('Everything', 'all', true));
    (window.COCO_MENU || []).forEach(function (g) { bar.appendChild(make(g.name, g.id, false)); });

    bar.addEventListener('click', function (e) {
      var chip = e.target.closest('[data-filter]');
      if (!chip) return;
      $$('.chip', bar).forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      var want = chip.dataset.filter;
      $$('.menu-group').forEach(function (sec) {
        sec.hidden = want !== 'all' && sec.dataset.group !== want;
      });
    });
  }

  /* ------------------------------------------------------------- drawer */

  function renderDrawer() {
    var body = $('#drawerBody');
    if (!body) return;
    var ids = Order.ids();

    if (!ids.length) {
      body.innerHTML =
        '<div class="empty">' +
          '<h3>Nothing here yet</h3>' +
          '<p>Add what you fancy from the menu and it will show up here.</p>' +
        '</div>';
      return;
    }

    var html = ids.map(function (id) {
      var it = CATALOG[id].item;
      var q = Order.lines[id];
      return '' +
        '<div class="line">' +
          '<div>' +
            '<div class="line__name">' + it.name + '</div>' +
            '<div class="line__meta">' + money(it.price) + ' each</div>' +
            '<div class="stepper">' +
              '<button type="button" data-step="-1" data-id="' + id + '" aria-label="One less ' + it.name + '">−</button>' +
              '<span>' + q + '</span>' +
              '<button type="button" data-step="1" data-id="' + id + '" aria-label="One more ' + it.name + '">+</button>' +
            '</div>' +
          '</div>' +
          '<div class="line__total">' + money(it.price * q) + '</div>' +
        '</div>';
    }).join('');

    html +=
      '<textarea class="note-field" id="orderNote" rows="2" ' +
      'placeholder="Anything for the counter? Less ice, extra chutney, one to take away…">' +
      Order.note.replace(/</g, '&lt;') + '</textarea>';

    body.innerHTML = html;

    var note = $('#orderNote', body);
    if (note) {
      note.addEventListener('input', function () { Order.setNote(note.value); });
    }
  }

  function wireDrawer() {
    var drawer = $('#drawer');
    var scrim = $('#scrim');
    if (!drawer || !scrim) return;

    function open() {
      drawer.classList.add('is-open');
      scrim.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-locked');
      var close = $('#drawerClose');
      if (close) close.focus();
    }
    function close() {
      drawer.classList.remove('is-open');
      scrim.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
    }

    $$('[data-open-order]').forEach(function (b) { b.addEventListener('click', open); });
    $$('[data-close-order]').forEach(function (b) { b.addEventListener('click', close); });
    scrim.addEventListener('click', close);

    drawer.addEventListener('click', function (e) {
      var step = e.target.closest('[data-step]');
      if (step) {
        var id = step.dataset.id;
        Order.setQty(id, Order.qty(id) + Number(step.dataset.step));
        return;
      }
      if (e.target.closest('[data-clear]')) {
        Order.clear();
        toast('Order cleared');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if ($('#counter').classList.contains('is-open')) return; // counter handles its own
      if (drawer.classList.contains('is-open')) close();
    });

    window.cocoCloseDrawer = close;
  }

  /* ------------------------------------------------------ counter view */

  function wireCounter() {
    var counter = $('#counter');
    if (!counter) return;

    function open() {
      if (!Order.count()) { toast('Add something first'); return; }
      renderCounter();
      counter.classList.add('is-open');
      counter.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-locked');
      if (window.cocoCloseDrawer) window.cocoCloseDrawer();
      var done = $('#counterClose');
      if (done) done.focus();
    }
    function close() {
      counter.classList.remove('is-open');
      counter.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
    }

    $$('[data-show-counter]').forEach(function (b) { b.addEventListener('click', open); });
    $$('[data-close-counter]').forEach(function (b) { b.addEventListener('click', close); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && counter.classList.contains('is-open')) close();
    });

    var copy = $('#counterCopy');
    if (copy) {
      copy.addEventListener('click', function () {
        var text = Order.asText();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function () { toast('Order copied'); },
            function () { toast('Could not copy'); }
          );
        } else {
          toast('Copying is not available here');
        }
      });
    }
  }

  function renderCounter() {
    var body = $('#counterBody');
    if (!body) return;

    body.innerHTML = Order.ids().map(function (id) {
      var it = CATALOG[id].item;
      var q = Order.lines[id];
      return '' +
        '<div class="counter__line">' +
          '<span class="counter__qty">' + q + '×</span>' +
          '<span class="counter__name">' + it.name + '</span>' +
          '<span class="counter__amt">' + money(it.price * q) + '</span>' +
        '</div>';
    }).join('');

    if (Order.note) {
      var box = document.createElement('div');
      box.className = 'counter__note';
      box.innerHTML = '<strong>Note for the counter</strong>';
      box.appendChild(document.createTextNode(Order.note));
      body.appendChild(box);
    }

    $('#counterCode').textContent = Order.code || '—';
    $('#counterTotalValue').textContent = money(Order.total());

    var n = Order.count();
    var time = new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });
    $('#counterHint').textContent = n + (n === 1 ? ' item' : ' items') + ' · ' + time;
  }

  /* --------------------------------------------------- signatures rail

     A horizontal rail of portrait clips. Captions sit UNDER the video, so no
     part of the footage has to be dimmed to keep text readable — which is
     also why this replaced the 3D carousel. */

  function buildShowcase() {
    var rail = $('#sigRail');
    if (!rail) return;

    var data = window.COCO_SHOWCASE || [];
    if (!data.length) return;

    data.forEach(function (d, i) {
      var entry = CATALOG[d.itemId];
      var card = document.createElement('article');
      card.className = 'sig';
      card.setAttribute('data-aos', 'fade-up');
      card.style.setProperty('--d1', d.tint[0]);
      card.style.setProperty('--d2', d.tint[1]);
      card.style.setProperty('--d3', d.tint[2]);

      card.innerHTML =
        '<div class="sig__media">' +
          '<div class="sig__fallback"></div>' +
          '<video muted loop playsinline preload="metadata"></video>' +
          '<span class="sig__index">' + (i + 1) + '</span>' +
        '</div>' +
        '<p class="label sig__kicker">' + d.kicker + '</p>' +
        '<h3 class="sig__name">' + d.name + '</h3>' +
        '<p class="sig__note">' + d.note + '</p>' +
        (entry
          ? '<div class="sig__foot">' +
              '<span class="sig__price">' + money(entry.item.price) + '</span>' +
              '<button class="sig__add" type="button" data-sig-add="' + d.itemId + '">' +
                'Add to order <span class="arrow">↗</span>' +
              '</button>' +
            '</div>'
          : '');

      var video = $('video', card);
      video.src = d.video;
      video.addEventListener('error', function () { video.remove(); });

      rail.appendChild(card);
    });

    rail.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-sig-add]');
      if (!btn) return;
      var id = btn.dataset.sigAdd;
      if (!CATALOG[id]) return;
      Order.add(id, 1);
      toast(CATALOG[id].item.name + ' added');
    });

    /* arrows step one card at a time */
    var cards = $$('.sig', rail);

    function step(dir) {
      var width = cards[0].offsetWidth + 20;
      rail.scrollBy({ left: dir * width, behavior: 'smooth' });
    }
    $$('[data-sig-prev]').forEach(function (b) { b.addEventListener('click', function () { step(-1); }); });
    $$('[data-sig-next]').forEach(function (b) { b.addEventListener('click', function () { step(1); }); });

    function syncArrows() {
      var atStart = rail.scrollLeft < 8;
      var atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
      $$('[data-sig-prev]').forEach(function (b) { b.disabled = atStart; });
      $$('[data-sig-next]').forEach(function (b) { b.disabled = atEnd; });
    }
    rail.addEventListener('scroll', syncArrows, { passive: true });
    window.addEventListener('resize', syncArrows);
    syncArrows();

    /* only play what is actually on screen */
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var v = $('video', entry.target);
          if (!v) return;
          if (entry.isIntersecting) {
            var p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else { v.pause(); }
        });
      }, { root: rail, threshold: 0.4 });
      cards.forEach(function (c) { io.observe(c); });
    }
  }

  /* --------------------------------------------------- plated drinks

     A showcase, not a shop: what goes into a few of the drinks, with no price
     and nothing to add. Ordering happens on the menu page.

     An item appears here when it has BOTH an `image` and an `ingredients`
     list, so the selection is controlled from menu-data.js. */

  function buildPlates() {
    var grid = $('#plateGrid');
    if (!grid) return;

    var items = [];
    (window.COCO_MENU || []).forEach(function (group) {
      group.items.forEach(function (item) {
        if (item.image && item.ingredients && item.ingredients.length) {
          items.push({ item: item, group: group });
        }
      });
    });

    if (!items.length) { grid.closest('section').hidden = true; return; }

    items.forEach(function (entry) {
      var it = entry.item;
      var card = document.createElement('article');
      card.className = 'pl';
      card.setAttribute('data-aos', 'fade-up');
      card.innerHTML =
        '<div class="pl__media">' +
          '<img src="' + it.image + '" alt="' + it.name + '" loading="lazy" decoding="async">' +
        '</div>' +
        '<div class="pl__body">' +
          '<p class="label pl__kicker">' + entry.group.name + '</p>' +
          '<h3 class="pl__name">' + it.name + '</h3>' +
          '<p class="pl__note">' + it.note + '</p>' +
          '<ul class="pl__ing">' +
            it.ingredients.map(function (x) { return '<li>' + x + '</li>'; }).join('') +
          '</ul>' +
        '</div>';
      grid.appendChild(card);
    });
  }

  /* ------------------------------------------------- instagram reviews */

  function buildReviews() {
    var rail = $('#igRail');
    if (!rail) return;

    var data = window.COCO_REVIEWS || [];
    if (!data.length) { rail.closest('section').hidden = true; return; }

    var ICON = {
      heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8Z"/>',
      chat:  '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.5 9.5 0 0 1-4-.9L3 20.5l1.5-4.6a8.4 8.4 0 0 1-.9-4 8.4 8.4 0 0 1 8.4-8.4h.6a8.4 8.4 0 0 1 7.9 7.9Z"/>',
      send:  '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/>',
      save:  '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>'
    };

    function svg(d, filled, cls) {
      return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true" ' +
             'fill="' + (filled ? 'currentColor' : 'none') + '" stroke="currentColor" ' +
             'stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
    }

    data.forEach(function (r) {
      var card = document.createElement('article');
      card.className = 'ig';
      card.setAttribute('data-aos', 'fade-up');
      card.innerHTML =
        '<header class="ig__head">' +
          '<span class="ig__avatar">' +
            (window.cocoIcon ? window.cocoIcon(r.icon || 'cup') : '') +
          '</span>' +
          '<span class="ig__who">' +
            '<p class="ig__user">@' + r.handle + '</p>' +
            '<p class="ig__place">' + r.place + '</p>' +
          '</span>' +
          '<span class="ig__dots" aria-hidden="true">&#8943;</span>' +
        '</header>' +

        '<div class="ig__media">' +
          '<video muted loop playsinline preload="none"></video>' +
        '</div>' +

        '<div class="ig__actions">' +
          svg(ICON.heart, true, 'ig__heart') +
          svg(ICON.chat) +
          svg(ICON.send) +
          svg(ICON.save, false, 'ig__save') +
        '</div>' +

        '<div class="ig__body">' +
          '<p class="ig__likes">' + r.likes.toLocaleString('en-IN') + ' likes</p>' +
          '<p class="ig__caption"><b>@' + r.handle + '</b> ' + r.text + '</p>' +
          '<p class="ig__time">' + r.when + '</p>' +
        '</div>';

      var video = $('video', card);
      video.src = r.video;
      video.addEventListener('error', function () { video.remove(); });

      rail.appendChild(card);
    });

    /* play only what is on screen — four more videos is a lot otherwise */
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var v = $('video', entry.target);
          if (!v) return;
          if (entry.isIntersecting) {
            var p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else { v.pause(); }
        });
      }, { threshold: 0.35 });
      $$('.ig', rail).forEach(function (c) { io.observe(c); });
    }
  }

  /* ------------------------------------------------------------ chrome */

  var toastTimer;
  function toast(message) {
    var el = $('#toast');
    if (!el) return;
    // with the drawer open you can see the line appear — no need to shout
    var drawer = $('#drawer');
    if (drawer && drawer.classList.contains('is-open')) return;
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-visible'); }, 1900);
  }

  /* ------------------------------------------------- scroll-driven film
     A tall section with a sticky viewport inside it. Scroll position through
     the section maps to the video's currentTime, so the clip plays as you
     scroll and reverses when you scroll back.

     Phones get a plain looping autoplay instead: seeking per frame is
     expensive on mobile decoders and the result stutters. */

  function wireScrollFilms() {
    var films = $$('[data-film]');
    if (!films.length) return;

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var small  = window.matchMedia('(max-width: 760px)').matches;

    films.forEach(function (film) {
      var video = $('video', film);
      if (!video) return;

      var bar   = $('[data-film-progress]', film);
      var steps = $$('[data-film-step]', film);

      if (reduce || small) {
        film.style.height = 'auto';
        video.loop = true;
        steps.forEach(function (s) { s.classList.add('is-on'); });
        if ('IntersectionObserver' in window) {
          new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                var p = video.play();
                if (p && p.catch) p.catch(function () {});
              } else { video.pause(); }
            });
          }, { threshold: 0.25 }).observe(film);
        }
        return;
      }

      video.pause();
      video.loop = false;

      var target = 0, eased = 0, running = false;

      function readProgress() {
        var scrollable = film.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return 0;
        var passed = -film.getBoundingClientRect().top;
        return Math.min(1, Math.max(0, passed / scrollable));
      }

      function tick() {
        var dur = video.duration;
        if (!dur || !isFinite(dur)) { running = false; return; }

        var want = target * dur;
        eased += (want - eased) * 0.14;      // smooths out scroll jitter

        if (Math.abs(eased - video.currentTime) > 0.02) {
          try { video.currentTime = eased; } catch (e) { /* not seekable yet */ }
        }

        if (Math.abs(want - eased) > 0.015) { requestAnimationFrame(tick); }
        else { running = false; }
      }

      function onScroll() {
        target = readProgress();

        if (bar) bar.style.width = (target * 100).toFixed(1) + '%';
        steps.forEach(function (s, i) {
          s.classList.toggle('is-on', target >= i / steps.length);
        });

        if (!running) { running = true; requestAnimationFrame(tick); }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      video.addEventListener('loadedmetadata', onScroll);
      onScroll();
    });
  }

  /* ------------------------------------------------------ fries builder */

  function wireFriesPicker() {
    var root = $('#builderPicker');
    if (!root) return;

    var inputs  = $$('input[name="builder"]', root);
    var totalEl = $('#builderTotal');
    var addBtn  = $('#builderAdd');
    var chips   = $$('[data-topping]');
    if (!inputs.length || !totalEl || !addBtn) return;

    function update() {
      var chosen = inputs.filter(function (i) { return i.checked; })[0] || inputs[0];
      var entry = CATALOG[chosen.value];
      if (!entry) return;

      totalEl.textContent = money(entry.item.price);
      addBtn.dataset.id = chosen.value;
      addBtn.textContent = 'Add to order';

      var on = (chosen.dataset.toppings || '').split(',');
      chips.forEach(function (chip) {
        chip.dataset.on = on.indexOf(chip.dataset.topping) > -1 ? 'true' : 'false';
      });
    }

    inputs.forEach(function (i) { i.addEventListener('change', update); });

    addBtn.addEventListener('click', function () {
      var id = addBtn.dataset.id;
      if (!CATALOG[id]) return;
      Order.add(id, 1);
      toast(CATALOG[id].item.name + ' added');
    });

    update();
  }

  /* Loop only part of a clip: <video data-start="2.2" data-end="7.9">.
     Useful when a generated video has a weak opening or tail you want to skip. */
  function wireVideoRanges() {
    $$('video[data-start]').forEach(function (v) {
      var start = parseFloat(v.dataset.start) || 0;
      var end = v.dataset.end ? parseFloat(v.dataset.end) : Infinity;

      v.loop = false; // we handle the wrap ourselves

      function rewind() {
        try { v.currentTime = start; } catch (e) { return; }
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      }

      if (v.readyState >= 1) { try { v.currentTime = start; } catch (e) {} }
      v.addEventListener('loadedmetadata', function () {
        try { v.currentTime = start; } catch (e) {}
      });
      v.addEventListener('timeupdate', function () {
        var stop = Math.min(end, v.duration || end);
        if (v.currentTime >= stop - 0.05) rewind();
      });
      v.addEventListener('ended', rewind);
    });
  }

  /* --------------------------------------------------------- intro film
     A full-screen matcha clip on arrival. Plays on every page load, and is
     skipped entirely for anyone who asked for reduced motion. */

  function wireIntro() {
    var intro = $('#intro');
    if (!intro) return;

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) { intro.remove(); return; }

    var video = $('video', intro);
    var bar = $('[data-intro-bar]', intro);
    var done = false;
    var timer;

    function finish() {
      if (done) return;
      done = true;
      clearTimeout(timer);
      intro.classList.add('is-leaving');
      document.body.classList.remove('is-locked');
      setTimeout(function () { intro.remove(); }, 900);
    }

    document.body.classList.add('is-locked');
    intro.classList.add('is-on');

    if (video) {
      // The clip opens on an appliance panel, so the intro plays a window of
      // it. Handled here rather than through wireVideoRanges, which loops its
      // range — the intro has to end, not repeat.
      var from = parseFloat(intro.dataset.from) || 0;
      var to   = parseFloat(intro.dataset.to)   || Infinity;

      function start() {
        try { video.currentTime = from; } catch (e) {}
        var p = video.play();
        if (p && p.catch) p.catch(function () { /* autoplay blocked; timer still ends it */ });
      }

      if (video.readyState >= 1) start();
      else video.addEventListener('loadedmetadata', start, { once: true });

      video.addEventListener('timeupdate', function () {
        var stop = Math.min(to, video.duration || to);
        if (bar && isFinite(stop) && stop > from) {
          var pct = (video.currentTime - from) / (stop - from) * 100;
          bar.style.width = Math.max(0, Math.min(100, pct)).toFixed(1) + '%';
        }
        if (video.currentTime >= stop - 0.05) finish();
      });
      video.addEventListener('ended', finish);
      video.addEventListener('error', finish);
    }

    // hard ceiling, so a stalled video can never trap anyone on the splash.
    // The opener runs 8s and ends itself; this only catches a stall.
    timer = setTimeout(finish, 10500);

    $$('[data-intro-skip]', intro).forEach(function (b) { b.addEventListener('click', finish); });
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        finish();
        document.removeEventListener('keydown', onKey);
      }
    });
  }

  /* The header is transparent over the hero and only takes on a surface once
     you scroll. Pages whose hero is a dark video get light chrome until then. */
  function wireHeader() {
    var header = $('.site-header');
    if (!header) return;

    var main = $('main');
    var first = main && main.firstElementChild;
    if (first && (first.classList.contains('page-hero') || first.classList.contains('hero--film'))) {
      document.body.dataset.header = 'light';
    }

    function onScroll() {
      header.classList.toggle('is-stuck', window.scrollY > 2);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function wireNav() {
    var toggle = $('#navToggle');
    var nav = $('#nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Scroll-reveal animations are driven by AOS (Animate On Scroll), loaded
     from a CDN. Called after all dynamic content is built, so generated cards
     and menu rows are already in the DOM and get picked up. */
  function wireReveal() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (window.AOS && typeof window.AOS.init === 'function') {
      window.AOS.init({
        duration: 650,
        easing: 'ease-out-cubic',
        offset: 80,
        once: true,
        disable: function () { return reduce; }
      });
      // layout shifts as videos, images and the webfont settle, so recompute
      // trigger positions once everything has loaded
      window.addEventListener('load', function () { window.AOS.refresh(); });
    } else {
      // CDN blocked or failed: drop the hooks so nothing is stuck hidden
      $$('[data-aos]').forEach(function (el) { el.removeAttribute('data-aos'); });
    }

    // fallback for any element still using the hand-rolled reveal
    var targets = $$('.reveal');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  function markToday() {
    var list = $('#hours');
    if (!list) return;
    var today = new Date().getDay(); // 0 = Sunday
    $$('li', list).forEach(function (li) {
      var days = (li.dataset.days || '').split(',').map(Number);
      if (days.indexOf(today) > -1) li.classList.add('is-today');
    });
  }

  /* ------------------------------------------------------------ render */

  function render() {
    var count = Order.count();
    var total = Order.total();

    $$('[data-order-count]').forEach(function (el) {
      el.textContent = String(count);
      el.hidden = count === 0;
    });
    $$('[data-order-total]').forEach(function (el) { el.textContent = money(total); });
    $$('[data-order-items]').forEach(function (el) {
      el.textContent = count + (count === 1 ? ' item' : ' items');
    });

    var bar = $('#orderBar');
    if (bar) bar.classList.toggle('is-visible', count > 0);

    $$('.order-pill').forEach(function (p) { p.classList.toggle('has-items', count > 0); });

    $$('.item').forEach(function (row) {
      var q = Order.qty(row.dataset.id);
      var badge = $('[data-qty]', row);
      if (badge) badge.textContent = q ? q + '×' : '';
    });

    renderDrawer();
  }

  /* -------------------------------------------------------------- init */

  function init() {
    wireIntro();
    Order.load();
    buildTeaser();
    buildFilters();
    buildMenu();
    wireDrawer();
    wireCounter();
    buildShowcase();
    buildPlates();
    buildReviews();
    wireScrollFilms();
    wireFriesPicker();
    wireVideoRanges();
    wireHeader();
    wireNav();
    wireReveal();
    markToday();
    render();

    // keep tabs in sync if the menu is open twice
    window.addEventListener('storage', function (e) {
      if (e.key !== STORE_KEY) return;
      Order.load();
      render();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
