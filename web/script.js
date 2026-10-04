/* GrowMate landing: Play Store link, fare calculator, app tour video. */
(function () {
  'use strict';

  // Set this to the live Google Play listing once the app is published.
  // While it is empty, the Play signs read "Coming soon to Google Play".
  var PLAY_STORE_URL = '';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var peso = new Intl.NumberFormat('en-PH', { maximumFractionDigits: 0 });
  function money(n) { return '₱' + peso.format(n); }

  /* ── Play Store sign ─────────────────────────────────────── */
  if (PLAY_STORE_URL) {
    // Swap each non-interactive "coming soon" plate for a real link.
    document.querySelectorAll('[data-play]').forEach(function (plate) {
      var link = document.createElement('a');
      link.className = plate.className.replace('btn--pending', 'btn--primary');
      link.href = PLAY_STORE_URL;
      link.rel = 'noopener';
      link.innerHTML = plate.innerHTML;
      var small = link.querySelector('[data-play-small]');
      if (small) small.textContent = 'Get it on';
      plate.replaceWith(link);
    });
    var cta = document.querySelector('[data-play-cta]');
    if (cta) { cta.href = PLAY_STORE_URL; cta.rel = 'noopener'; cta.textContent = 'Get the app'; cta.classList.replace('btn--secondary', 'btn--primary'); }
  }

  /* ── Fare calculator (mirrors calculate_growmate_delivery_fee) ── */
  var km = document.querySelector('[data-km]');
  if (km) {
    var out = {
      km: document.querySelector('[data-km-out]'),
      road: document.querySelector('[data-road-out]'),
      total: document.querySelector('[data-total]'),
      price: document.querySelector('[data-price-out]'),
      fee: document.querySelector('[data-fee]')
    };
    var prices = document.querySelectorAll('input[name="price"]');

    var update = function () {
      var straight = Number(km.value);
      var road = Math.round(straight * 1.25 * 100) / 100;
      var fee = Math.max(50, Math.round(40 + road * 6));
      var checked = document.querySelector('input[name="price"]:checked');
      var price = checked ? Number(checked.value) : 1000;

      out.km.textContent = straight + ' km';
      out.road.textContent = road + ' km';
      out.price.textContent = money(price);
      out.fee.textContent = money(fee);
      out.total.textContent = money(price + fee);

      var fill = ((straight - km.min) / (km.max - km.min)) * 100;
      km.style.setProperty('--fill', fill + '%');
    };

    km.addEventListener('input', update);
    prices.forEach(function (p) { p.addEventListener('change', update); });
    update();
  }

  /* ── A phone whose screenshot is missing hides instead of showing a broken image ── */
  document.querySelectorAll(".phone img").forEach(function (img) {
    function hide() { var fig = img.closest(".phone"); if (fig) fig.hidden = true; }
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("loading") !== "lazy") hide();
    img.addEventListener("error", hide);
  });

  /* ── App tour video: plays only while on screen, never under reduced motion ── */
  document.querySelectorAll("[data-tour]").forEach(function (video) {
    if (reduceMotion) return; // stays on the poster frame
    function play() { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) play(); else video.pause();
      }, { threshold: 0.35 }).observe(video);
    } else {
      play();
    }
  });

  /* ── Scroll reveal (content stays visible without JS or with reduced motion) ── */
  if (!reduceMotion && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll("[data-reveal], .clinic__step, .row, .flow__step, .problem, .steps .card");
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) {
      // stagger siblings in the same list
      var parent = el.parentElement;
      var idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
      el.style.setProperty("--d", (Math.min(idx, 5) * 0.08) + "s");
      io.observe(el);
    });
  }

})();
