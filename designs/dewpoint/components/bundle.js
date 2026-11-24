/* @ds-bundle: {"format":4,"namespace":"Dewpoint","components":[{"name":"Button"},{"name":"NavBar"},{"name":"AnnouncementBar"},{"name":"Hero"},{"name":"FeatureBlock"},{"name":"MediaTile"},{"name":"PostCard"},{"name":"Chip"},{"name":"SectionHeader"},{"name":"Newsletter"},{"name":"Dropdown"},{"name":"Footer"}]} */
/* Dewpoint helpers. Plain script, no imports. Call Dewpoint.init() once; every effect is opt-in by attribute and stops under prefers-reduced-motion. */
(function () {
  var reduce = function () { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; };
  var cssVar = function (n, fb) { var v = getComputedStyle(document.documentElement).getPropertyValue(n).trim(); return v || fb; };

  /* Theme: Dewpoint.theme.set("dark") | toggle(). Also honours ?theme= so previews can be framed. */
  var theme = {
    set: function (t) { document.documentElement.setAttribute("data-theme", t); try { window.dispatchEvent(new CustomEvent("dp-theme", { detail: t })); } catch (e) {} },
    get: function () { return document.documentElement.getAttribute("data-theme") || "light"; },
    toggle: function () { theme.set(theme.get() === "dark" ? "light" : "dark"); }
  };

  /* Typewriter: <h1 data-dp-type="Small tools, steady hands."></h1>. Types at 55ms per character then leaves the caret blinking. */
  function typewriter(el, text, opts) {
    opts = opts || {}; var speed = opts.speed || 55;
    text = text || el.getAttribute("data-dp-type") || "";
    el.setAttribute("aria-label", text);
    var out = document.createElement("span"); out.setAttribute("aria-hidden", "true");
    var caret = document.createElement("span"); caret.className = "dp-caret"; caret.setAttribute("aria-hidden", "true");
    el.textContent = ""; el.appendChild(out); el.appendChild(caret);
    if (reduce()) { out.textContent = text; return { stop: function () {} }; }
    var i = 0, t = setTimeout(function step() { out.textContent = text.slice(0, ++i); if (i < text.length) t = setTimeout(step, speed); }, opts.delay || 400);
    return { stop: function () { clearTimeout(t); out.textContent = text; } };
  }

  /* FleckField: radial confetti drawn on a <canvas>; the centre stays clear for type. Drifts toward the pointer. */
  function fleckField(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d"), flecks = [], W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), mx = 0, my = 0, raf = 0, seed = opts.seed || 7;
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    function pal() { return ["blue", "violet", "magenta", "coral", "amber", "gold"].map(function (n, i) { return cssVar("--fleck-" + n, ["#3279f9", "#5b4bd6", "#c2358a", "#e8504a", "#f2a33a", "#f4c542"][i]); }); }
    function build() {
      var r = canvas.getBoundingClientRect(); W = r.width; H = r.height; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var P = pal(), n = Math.round((opts.count || 1700) * Math.min(1, W / 1440)); flecks = []; seed = opts.seed || 7;
      var cx = W / 2, cy = H * 0.52;
      for (var k = 0; k < n * 2 && flecks.length < n; k++) {
        var a = rnd() * Math.PI * 2, d = Math.pow(rnd(), 0.6), rad = 190 + d * Math.max(W, H) * 0.78;
        var x = cx + Math.cos(a) * rad * 1.25, y = cy + Math.sin(a) * rad * 0.8;
        if (x < -10 || x > W + 10 || y < -10 || y > H + 10) continue;
        if (Math.abs(x - cx) < Math.min(430, W * 0.4) && Math.abs(y - cy) < 150) continue;
        var t = (a / (Math.PI * 2) + 0.08) % 1, f = t * P.length, i = Math.floor(f) % P.length;
        flecks.push({ x: x, y: y, L: (2.5 + Math.pow(rnd(), 1.6) * 8.5) * (0.6 + d * 0.8), T: 1.4 + rnd() * 2, ang: Math.atan2(y - cy, x - cx) + (rnd() - 0.5) * 0.28, col: P[i], op: 0.4 + rnd() * 0.6, depth: 0.2 + d, ph: rnd() * 6.28 });
      }
    }
    function draw(tm) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < flecks.length; i++) {
        var f = flecks[i], dx = reduce() ? 0 : mx * 10 * f.depth + Math.sin(tm / 2400 + f.ph) * 1.5, dy = reduce() ? 0 : my * 10 * f.depth + Math.cos(tm / 2800 + f.ph) * 1.5;
        ctx.save(); ctx.translate(f.x + dx, f.y + dy); ctx.rotate(f.ang); ctx.globalAlpha = f.op; ctx.fillStyle = f.col;
        var r = f.T / 2; ctx.beginPath(); ctx.moveTo(-f.L / 2 + r, -r); ctx.lineTo(f.L / 2 - r, -r); ctx.arc(f.L / 2 - r, 0, r, -1.5708, 1.5708); ctx.lineTo(-f.L / 2 + r, r); ctx.arc(-f.L / 2 + r, 0, r, 1.5708, 4.7124); ctx.fill(); ctx.restore();
      }
      if (!reduce()) raf = requestAnimationFrame(draw);
    }
    function onMove(e) { var r = canvas.getBoundingClientRect(); mx = ((e.clientX - r.left) / r.width - 0.5) * 2; my = ((e.clientY - r.top) / r.height - 0.5) * 2; }
    build(); draw(0);
    window.addEventListener("resize", function () { build(); if (reduce()) draw(0); });
    window.addEventListener("dp-theme", function () { build(); if (reduce()) draw(0); });
    if (!reduce()) window.addEventListener("pointermove", onMove, { passive: true });
    return { stop: function () { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); } };
  }

  /* Dropdown: .dp-dropdown > button[aria-haspopup] + .dp-menu > .dp-menu__item[role=option]. Arrow keys, Esc, outside click. */
  function dropdown(root) {
    var btn = root.querySelector("[aria-haspopup]"), items = [].slice.call(root.querySelectorAll(".dp-menu__item")), idx = -1;
    var label = root.querySelector("[data-dp-value]");
    function open(o) { root.classList.toggle("is-open", o); btn.setAttribute("aria-expanded", o ? "true" : "false"); if (!o) { idx = -1; items.forEach(function (i) { i.classList.remove("is-focused"); }); } }
    function focus(n) { idx = (n + items.length) % items.length; items.forEach(function (i, k) { i.classList.toggle("is-focused", k === idx); }); }
    btn.addEventListener("click", function () { open(!root.classList.contains("is-open")); });
    root.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { open(false); btn.focus(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); open(true); focus(idx + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); open(true); focus(idx - 1); }
      else if (e.key === "Enter" && idx > -1) { e.preventDefault(); items[idx].click(); }
    });
    items.forEach(function (it) { it.addEventListener("click", function () { items.forEach(function (o) { o.setAttribute("aria-selected", o === it ? "true" : "false"); }); if (label) label.textContent = it.getAttribute("data-label") || it.textContent.trim(); open(false); btn.focus(); }); });
    document.addEventListener("click", function (e) { if (!root.contains(e.target)) open(false); });
  }

  /* Slider: .dp-posts with [data-dp-prev]/[data-dp-next] buttons anywhere in the same [data-dp-slider] wrapper. */
  function slider(wrap) {
    var track = wrap.querySelector(".dp-posts"), prev = wrap.querySelector("[data-dp-prev]"), next = wrap.querySelector("[data-dp-next]");
    function step() { var c = track.querySelector(".dp-post"); return c ? c.getBoundingClientRect().width + 48 : 336; }
    function sync() { prev.disabled = track.scrollLeft < 4; next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; }
    prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: reduce() ? "auto" : "smooth" }); });
    next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: reduce() ? "auto" : "smooth" }); });
    track.addEventListener("scroll", sync, { passive: true }); sync();
  }

  /* Reveal: [data-dp-reveal] fades up 6px when it enters the viewport. Visible by default; only hidden once observed. */
  function reveal(root) {
    var els = [].slice.call((root || document).querySelectorAll("[data-dp-reveal]"));
    if (reduce() || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove("is-pending"); e.target.classList.add("is-in"); io.unobserve(e.target); } }); }, { threshold: 0.15 });
    els.forEach(function (el, i) { el.classList.add("dp-reveal"); var r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) { return; } el.style.transitionDelay = (i % 4) * 60 + "ms"; el.classList.add("is-pending"); io.observe(el); });
  }

  /* Dismiss: [data-dp-dismiss] hides its closest [data-dp-dismissible]. */
  function dismiss(root) {
    (root || document).querySelectorAll("[data-dp-dismiss]").forEach(function (b) { b.addEventListener("click", function () { var t = b.closest("[data-dp-dismissible]"); if (t) t.hidden = true; }); });
  }

  /* Progress: Dewpoint.progress(el).start() creeps to 70% over 8s; .done() fills and fades. */
  function progress(el) {
    return {
      start: function () { el.style.opacity = 1; el.classList.add("is-animating"); },
      done: function () { el.classList.remove("is-animating"); el.style.transform = "scaleX(1)"; setTimeout(function () { el.style.opacity = 0; }, 200); }
    };
  }

  function init(root) {
    var m = location.search.match(/theme=([\w-]+)/); if (m) theme.set(m[1]);
    root = root || document;
    root.querySelectorAll("[data-dp-type]").forEach(function (el) { typewriter(el); });
    root.querySelectorAll("canvas[data-dp-flecks]").forEach(function (c) { fleckField(c); });
    root.querySelectorAll(".dp-dropdown").forEach(dropdown);
    root.querySelectorAll("[data-dp-slider]").forEach(slider);
    dismiss(root); reveal(root);
  }

  window.Dewpoint = { theme: theme, typewriter: typewriter, fleckField: fleckField, dropdown: dropdown, slider: slider, reveal: reveal, progress: progress, init: init };
})();

/* Shared component extras */
(function () {
  var NS = window.Dewpoint; if (!NS) return; var P = "dp";
  function select(root) {
    var btn = root.querySelector("." + P + "-select__btn"), opts = [].slice.call(root.querySelectorAll("." + P + "-select__opt")), idx = -1, val = root.querySelector("[data-value]");
    function open(o) { root.classList.toggle("is-open", o); btn.setAttribute("aria-expanded", o ? "true" : "false"); if (!o) { idx = -1; opts.forEach(function (x) { x.classList.remove("is-focused"); }); } }
    function focus(n) { idx = (n + opts.length) % opts.length; opts.forEach(function (x, k) { x.classList.toggle("is-focused", k === idx); }); }
    btn.addEventListener("click", function () { open(!root.classList.contains("is-open")); });
    root.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { open(false); btn.focus(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); open(true); focus(idx + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); open(true); focus(idx - 1); }
      else if (e.key === "Enter" && idx > -1) { e.preventDefault(); opts[idx].click(); }
    });
    opts.forEach(function (o) { o.addEventListener("click", function () { opts.forEach(function (x) { x.setAttribute("aria-selected", x === o ? "true" : "false"); }); if (val) val.textContent = o.textContent; open(false); btn.focus(); }); });
    document.addEventListener("click", function (e) { if (!root.contains(e.target)) open(false); });
  }
  function tabset(root) {
    var tabs = [].slice.call(root.querySelectorAll('[role="tab"]'));
    function show(t) { tabs.forEach(function (x) { var on = x === t; x.setAttribute("aria-selected", on ? "true" : "false"); x.tabIndex = on ? 0 : -1; var pn = document.getElementById(x.getAttribute("aria-controls")); if (pn) pn.hidden = !on; }); t.focus(); }
    tabs.forEach(function (t, i) { t.addEventListener("click", function () { show(t); }); t.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") { e.preventDefault(); show(tabs[(i + 1) % tabs.length]); } if (e.key === "ArrowLeft") { e.preventDefault(); show(tabs[(i - 1 + tabs.length) % tabs.length]); } }); });
  }
  NS.select = select; NS.tabset = tabset;
  NS.initExtras = function (r) {
    r = r || document;
    [].forEach.call(r.querySelectorAll("." + P + "-select"), select);
    [].forEach.call(r.querySelectorAll("." + P + "-tabset"), tabset);
    [].forEach.call(r.querySelectorAll("[data-dismiss]"), function (b) { b.addEventListener("click", function () { var t = b.closest("[data-dismissible]"); if (t) t.hidden = true; }); });
  };
})();
