/* @ds-bundle: {"format":4,"namespace":"Hairline","components":[{"name":"Button"},{"name":"NavBar"},{"name":"Headline"},{"name":"PillTabs"},{"name":"Tag"},{"name":"TextField"},{"name":"Card"},{"name":"Avatar"},{"name":"Callout"},{"name":"WorkGraph"},{"name":"Menu"},{"name":"ProofStrip"}]} */
(function () {
  "use strict";

  function reduced() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* Pill tabs: [role=tablist].hl-pilltabs. Each tab may name its panel with aria-controls. Arrow keys move between tabs. */
  function tabs(root) {
    (root || document).querySelectorAll(".hl-pilltabs[role=tablist]").forEach(function (list) {
      if (list.getAttribute("data-hl-ready")) return;
      list.setAttribute("data-hl-ready", "1");
      var all = Array.prototype.slice.call(list.querySelectorAll(".hl-pilltab"));
      function select(t, focus) {
        all.forEach(function (b) {
          var on = b === t;
          b.setAttribute("aria-selected", on ? "true" : "false");
          b.tabIndex = on ? 0 : -1;
          var id = b.getAttribute("aria-controls"), p = id && document.getElementById(id);
          if (p) p.hidden = !on;
        });
        if (focus) t.focus();
      }
      list.addEventListener("click", function (e) { var t = e.target.closest(".hl-pilltab"); if (t) select(t); });
      list.addEventListener("keydown", function (e) {
        var i = all.indexOf(document.activeElement); if (i < 0) return;
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          select(all[(i + (e.key === "ArrowRight" ? 1 : all.length - 1)) % all.length], true);
        }
      });
      select(all.filter(function (b) { return b.getAttribute("aria-selected") === "true"; })[0] || all[0]);
    });
  }

  /* Menus: .hl-menu > .hl-menu__trigger[aria-controls] + .hl-menu__panel. Escape or an outside click closes. */
  function menus(root) {
    (root || document).querySelectorAll(".hl-menu").forEach(function (m) {
      if (m.getAttribute("data-hl-ready")) return;
      m.setAttribute("data-hl-ready", "1");
      var btn = m.querySelector(".hl-menu__trigger"), panel = m.querySelector(".hl-menu__panel");
      if (!btn || !panel) return;
      function set(open) { btn.setAttribute("aria-expanded", open ? "true" : "false"); panel.hidden = !open; }
      set(btn.getAttribute("aria-expanded") === "true");
      btn.addEventListener("click", function () { set(panel.hidden); });
      document.addEventListener("click", function (e) { if (!m.contains(e.target)) set(false); });
      m.addEventListener("keydown", function (e) { if (e.key === "Escape") { set(false); btn.focus(); } });
    });
  }

  /* Work graph: draws each .hl-wire in once the graph scrolls into view, staggered by 120ms. */
  function graph(el) {
    if (!el || el.getAttribute("data-hl-ready")) return;
    el.setAttribute("data-hl-ready", "1");
    if (reduced()) return;
    el.querySelectorAll(".hl-wire").forEach(function (w, i) {
      /* wires use non-scaling strokes, so dashes are measured in screen pixels: scale the path length, then clear the dash when done */
      var len = 2000, svg = w.ownerSVGElement, scale = 1;
      try { scale = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width || 1; } catch (e) {}
      try { len = Math.ceil(w.getTotalLength() * scale) + 4; } catch (e) {}
      w.style.setProperty("--len", len);
      w.style.animationDelay = (i * 120) + "ms";
      w.addEventListener("animationend", function () { w.style.animation = "none"; w.style.strokeDasharray = "none"; w.style.strokeDashoffset = "0"; });
    });
    function go() { el.classList.add("is-drawing"); }
    if (!("IntersectionObserver" in window)) return go();
    var io = new IntersectionObserver(function (es) {
      if (es.some(function (x) { return x.isIntersecting; })) { go(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
  }

  function init(root) {
    root = root || document;
    tabs(root);
    menus(root);
    root.querySelectorAll(".hl-graph[data-hl-draw]").forEach(graph);
  }

  window.Hairline = { version: "1.0.0", init: init, tabs: tabs, menus: menus, graph: graph };
})();
