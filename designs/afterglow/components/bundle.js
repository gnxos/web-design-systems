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
