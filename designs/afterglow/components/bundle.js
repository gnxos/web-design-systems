/* @ds-bundle: {"format":4,"namespace":"Afterglow","components":[{"name":"Hero"},{"name":"Button"},{"name":"Chip"},{"name":"Tile"},{"name":"SectionHeader"},{"name":"StatTile"},{"name":"FeatureCard"},{"name":"DataCard"},{"name":"Terminal"},{"name":"NodeGraph"},{"name":"ListRows"}]} */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var SERIES = { 1: "var(--series-1)", 2: "var(--series-2)", 3: "var(--series-3)", 4: "var(--series-4)" };

  function reduced() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* Stagger the children of every .ag-line-in container: each line rises 4px and fades in. */
  function lineIn(root, step) {
    (root || document).querySelectorAll(".ag-line-in").forEach(function (box) {
      var s = step || +box.getAttribute("data-step") || 90;
      Array.prototype.forEach.call(box.children, function (el, i) { el.style.animationDelay = (reduced() ? 0 : i * s) + "ms"; });
    });
  }

  /* Render a hub-and-spoke node graph into an .ag-graph element.
     data = { hub: {label, meta}, nodes: [{label, meta, series: 1-4, x: 0-100, y: 0-100}] } */
  function graph(el, data) {
    el.innerHTML = "";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "ag-graph__edges");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");
    el.appendChild(svg);
    function node(n, hub, i) {
      var d = document.createElement("div");
      d.className = "ag-node" + (hub ? " ag-node--hub" : "");
      d.style.left = (hub ? 50 : n.x) + "%";
      d.style.top = (hub ? 50 : n.y) + "%";
      if (!reduced()) d.style.animationDelay = (hub ? 0 : 120 + i * 70) + "ms";
      if (!hub) {
        var dot = document.createElement("i");
        dot.className = "ag-dot";
        dot.style.background = SERIES[n.series || 1];
        d.appendChild(dot);
      }
      var t = document.createElement("span"); t.textContent = n.label; d.appendChild(t);
      if (n.meta) { var m = document.createElement("small"); m.textContent = n.meta; d.appendChild(m); }
      el.appendChild(d);
    }
    (data.nodes || []).forEach(function (n, i) {
      var l = document.createElementNS(NS, "line");
      l.setAttribute("x1", "50"); l.setAttribute("y1", "50");
      l.setAttribute("x2", String(n.x)); l.setAttribute("y2", String(n.y));
      l.setAttribute("vector-effect", "non-scaling-stroke");
      svg.appendChild(l);
      node(n, false, i);
    });
    node(data.hub || { label: "Hub" }, true, 0);
    return el;
  }

  /* Duplicate a ticker track's content so the -50% loop is seamless. */
  function ticker(root) {
    (root || document).querySelectorAll(".ag-ticker__track").forEach(function (t) {
      if (t.getAttribute("data-doubled")) return;
      t.innerHTML += t.innerHTML;
      t.setAttribute("data-doubled", "1");
    });
  }

  /* Switch theme on any element (defaults to <html>). */
  function theme(name, el) {
    (el || document.documentElement).setAttribute("data-theme", name === "light" ? "light" : "dark");
  }

  function init(root) {
    lineIn(root);
    ticker(root);
    (root || document).querySelectorAll("[data-ag-graph]").forEach(function (el) {
      try { graph(el, JSON.parse(el.getAttribute("data-ag-graph"))); } catch (e) { /* leave as is */ }
    });
  }

  window.Afterglow = { version: "1.0.0", init: init, lineIn: lineIn, graph: graph, ticker: ticker, theme: theme };
})();

/* Shared component extras */
(function () {
  var NS = window.Afterglow; if (!NS) return; var P = "ag";
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
