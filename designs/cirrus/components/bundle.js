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
