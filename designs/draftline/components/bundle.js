/* @ds-bundle: {"namespace":"Draftline","css":"bundle.css","exports":["init","initExtras"]} */
(function () {
  "use strict";
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  function once(el) { if (el.__df) return false; el.__df = true; return true; }
  function seen(el, fn) {
    if (!window.IntersectionObserver) { fn(); return; }
    var o = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { o.disconnect(); fn(); } }); }, { threshold: 0.2 });
    o.observe(el);
  }
  /* labels decode from random glyphs, left to right */
  function scramble(el) {
    var text = el.textContent; el.setAttribute("aria-label", text); if (reduce) return;
    var g = "<>[]{}/\\^=+*#0123456789";
    seen(el, function () {
      var start = null;
      function step(t) { if (!start) start = t; var p = Math.min(1, (t - start) / 700), n = Math.floor(p * text.length);
        el.textContent = text.slice(0, n) + text.slice(n).replace(/\S/g, function () { return g.charAt(Math.floor(Math.random() * g.length)); });
        if (p < 1) requestAnimationFrame(step); else el.textContent = text; }
      requestAnimationFrame(step);
    });
  }
  /* type a command once, 45ms a character */
  function type(el) {
    var text = el.textContent; el.setAttribute("aria-label", text); if (reduce) return; el.textContent = "";
    seen(el, function () { var i = 0, t = setInterval(function () { el.textContent = text.slice(0, ++i); if (i >= text.length) clearInterval(t); }, 45); });
  }
  function appear(el) {
    var k = [].slice.call(el.children);
    if (reduce) { k.forEach(function (c) { c.classList.add("is-on"); }); return; }
    seen(el, function () { k.forEach(function (c, i) { setTimeout(function () { c.classList.add("is-on"); }, 100 * i); }); });
  }
  function tabs(list) {
    var b = $$('[role="tab"]', list);
    function pick(n, focus) { b.forEach(function (x, i) { x.setAttribute("aria-selected", i === n ? "true" : "false"); x.tabIndex = i === n ? 0 : -1; var p = x.getAttribute("aria-controls"); if (p && document.getElementById(p)) document.getElementById(p).hidden = i !== n; }); if (focus) b[n].focus(); }
    b.forEach(function (x, i) { x.addEventListener("click", function () { pick(i); }); x.addEventListener("keydown", function (e) { var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (d) { e.preventDefault(); pick((i + d + b.length) % b.length, true); } }); });
    if (b.length) pick(Math.max(0, b.findIndex(function (x) { return x.getAttribute("aria-selected") === "true"; })));
  }
  function chips(g) { $$("[aria-pressed]", g).forEach(function (c) { c.addEventListener("click", function () { $$("[aria-pressed]", g).forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); }); }); }); }
  function dropdown(d) {
    var t = d.querySelector("[data-trigger]"), m = d.querySelector(".df-menu"); if (!t || !m) return;
    function set(o) { m.hidden = !o; t.setAttribute("aria-expanded", String(o)); }
    t.addEventListener("click", function () { set(m.hidden); });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape") { set(false); t.focus(); } if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); set(true); var a = $$("a", m), i = a.indexOf(document.activeElement); a[(i + (e.key === "ArrowDown" ? 1 : -1) + a.length) % a.length].focus(); } });
    document.addEventListener("click", function (e) { if (!d.contains(e.target)) set(false); });
  }
  function copy(btn) { btn.addEventListener("click", function () { var s = document.getElementById(btn.getAttribute("data-copy")); if (!s || !navigator.clipboard) return; navigator.clipboard.writeText(s.innerText).then(function () { var o = btn.textContent; btn.textContent = "Copied"; setTimeout(function () { btn.textContent = o; }, 1400); }, function () {}); }); }
  function run(name, fn, root) { $$("[data-" + name + "]", root).forEach(function (el) { if (once(el)) fn(el); }); }
  function init(root) {
    document.documentElement.classList.add("js");
    run("scramble", scramble, root); run("type", type, root); run("appear", appear, root); run("tabs", tabs, root); run("chips", chips, root); run("dropdown", dropdown, root); run("copy", copy, root);
  }
  window.Draftline = { init: init, initExtras: init };
})();
