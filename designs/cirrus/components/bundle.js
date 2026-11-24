/* @ds-bundle: {"format":4,"namespace":"Cirrus","components":[{"name":"Button"},{"name":"NavBar"},{"name":"Banner"},{"name":"Hero"},{"name":"BlurText"},{"name":"FeatureCard"},{"name":"SideTabs"},{"name":"GlassCard"},{"name":"Testimonial"},{"name":"DataTable"},{"name":"InsightCard"},{"name":"Footer"}]} */
/* Cirrus helpers. Call Cirrus.init(). Every effect is opt-in by attribute and stops under prefers-reduced-motion. */
(function () {
  var reduce = function () { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; };
  var theme = {
    set: function (t) { document.documentElement.setAttribute("data-theme", t); },
    get: function () { return document.documentElement.getAttribute("data-theme") || "light"; },
    toggle: function () { theme.set(theme.get() === "dark" ? "light" : "dark"); }
  };
  /* BlurText: <h2 class="cr-blur" data-cr-blur>Words appear one by one</h2>.
     Each word starts at opacity 0, 20px down, blur 8px and settles over 0.8s with a 0.15s stagger. Fires once at 20% visibility. */
  function blurText(el) {
    var text = el.getAttribute("data-original") || el.textContent.trim(); el.setAttribute("data-original", text); el.setAttribute("aria-label", text);
    var words = text.split(" "); el.textContent = "";
    words.forEach(function (w, i) {
      var s = document.createElement("span"); s.className = "cr-blur-word"; s.textContent = w; s.setAttribute("aria-hidden", "true");
      s.style.transition = "opacity .8s ease " + (i * 0.15) + "s, transform .8s ease " + (i * 0.15) + "s, filter .8s ease " + (i * 0.15) + "s";
      el.appendChild(s); if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
    function play() { [].forEach.call(el.querySelectorAll(".cr-blur-word"), function (s) { s.classList.add("is-in"); }); }
    if (reduce() || !("IntersectionObserver" in window)) { play(); return; }
    var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { requestAnimationFrame(play); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return { replay: function () { [].forEach.call(el.querySelectorAll(".cr-blur-word"), function (s) { s.classList.remove("is-in"); }); setTimeout(play, 60); } };
  }
  /* SideTabs: .cr-tabs > .cr-tab[data-cr-target]. Sets aria-current and --progress (0-100%) as the target scrolls. */
  function tabs(root) {
    var items = [].slice.call(root.querySelectorAll(".cr-tab"));
    items.forEach(function (t) { t.addEventListener("click", function (e) { e.preventDefault(); items.forEach(function (o) { o.removeAttribute("aria-current"); }); t.setAttribute("aria-current", "true"); t.style.setProperty("--progress", "100%"); }); });
    return { set: function (i, p) { items.forEach(function (o, k) { if (k === i) { o.setAttribute("aria-current", "true"); o.style.setProperty("--progress", p + "%"); } else o.removeAttribute("aria-current"); }); } };
  }
  /* Progress: Cirrus.progress(fillEl).set(0..1). 2px bar, width eases linear over 0.1s. */
  function progress(el) { return { set: function (v) { el.style.width = Math.max(0, Math.min(1, v)) * 100 + "%"; } }; }
  function init(root) {
    var m = location.search.match(/theme=([\w-]+)/); if (m) theme.set(m[1]);
    root = root || document;
    [].forEach.call(root.querySelectorAll("[data-cr-blur]"), blurText);
    [].forEach.call(root.querySelectorAll(".cr-tabs"), tabs);
  }
  window.Cirrus = { theme: theme, blurText: blurText, tabs: tabs, progress: progress, init: init };
})();

/* Shared component extras */
(function () {
  var NS = window.Cirrus; if (!NS) return; var P = "cr";
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
