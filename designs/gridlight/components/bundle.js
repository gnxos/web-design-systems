/* @ds-bundle: {"namespace":"Gridlight","css":"bundle.css","exports":["init","initExtras"]} */
(function () {
  "use strict";
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  function once(el) { if (el.__gl) return false; el.__gl = true; return true; }
  function seen(el, fn) {
    if (!window.IntersectionObserver) { fn(); return; }
    var o = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { o.disconnect(); fn(); } }); }, { threshold: 0.2 });
    o.observe(el);
  }
  /* rotating headline word: 3s interval, 600ms cross-blur */
  function swap(el) {
    var w = $$(":scope > span", el), i = 0; if (!w.length) return;
    w[0].classList.add("is-on"); if (reduce) return;
    setInterval(function () { w[i].classList.remove("is-on"); i = (i + 1) % w.length; w[i].classList.add("is-on"); }, 3000);
  }
  /* words resolve out of blur, one every 90ms */
  function words(el) {
    if (reduce) return;
    var t = el.textContent.trim().split(/\s+/); el.setAttribute("aria-label", t.join(" "));
    el.innerHTML = ""; t.forEach(function (x, i) { var s = document.createElement("span"); s.textContent = x; s.setAttribute("aria-hidden", "true"); el.appendChild(s); if (i < t.length - 1) el.appendChild(document.createTextNode(" ")); });
    el.classList.add("gl-words");
    seen(el, function () { $$("span", el).forEach(function (s, i) { setTimeout(function () { s.classList.add("is-on"); }, 90 * i); }); });
  }
  function reveal(el) {
    var kids = [].slice.call(el.children);
    if (reduce) { kids.forEach(function (k) { k.classList.add("is-on"); }); return; }
    seen(el, function () { kids.forEach(function (k, i) { setTimeout(function () { k.classList.add("is-on"); }, 450 * i); }); });
  }
  function tabs(list) {
    var b = $$('[role="tab"]', list);
    function pick(n, focus) {
      b.forEach(function (x, i) { x.setAttribute("aria-selected", i === n ? "true" : "false"); x.tabIndex = i === n ? 0 : -1; var p = x.getAttribute("aria-controls"); if (p && document.getElementById(p)) document.getElementById(p).hidden = i !== n; });
      if (focus) b[n].focus();
    }
    b.forEach(function (x, i) {
      x.addEventListener("click", function () { pick(i); });
      x.addEventListener("keydown", function (e) { var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (d) { e.preventDefault(); pick((i + d + b.length) % b.length, true); } });
    });
    if (b.length) pick(Math.max(0, b.findIndex(function (x) { return x.getAttribute("aria-selected") === "true"; })));
  }
  function chips(g) { $$("[aria-pressed]", g).forEach(function (c) { c.addEventListener("click", function () { $$("[aria-pressed]", g).forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); }); }); }); }
  function dropdown(d) {
    var t = d.querySelector("[data-trigger]"), m = d.querySelector(".gl-menu"); if (!t || !m) return;
    function set(o) { m.hidden = !o; t.setAttribute("aria-expanded", String(o)); }
    t.addEventListener("click", function () { set(m.hidden); });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape") { set(false); t.focus(); } if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); set(true); var a = $$("a", m), i = a.indexOf(document.activeElement); a[(i + (e.key === "ArrowDown" ? 1 : -1) + a.length) % a.length].focus(); } });
    document.addEventListener("click", function (e) { if (!d.contains(e.target)) set(false); });
  }
  function run(name, fn, root) { $$("[data-" + name + "]", root).forEach(function (el) { if (once(el)) fn(el); }); }
  function init(root) {
    document.documentElement.classList.add("js");
    run("swap", swap, root); run("words", words, root); run("reveal", reveal, root); run("tabs", tabs, root); run("chips", chips, root); run("dropdown", dropdown, root);
  }
  window.Gridlight = { init: init, initExtras: init };
})();
