/* @ds-bundle: {"format":4,"namespace":"Halftone","components":[{"name":"Hero"},{"name":"NavPill"},{"name":"Button"},{"name":"Eyebrow"},{"name":"Tag"},{"name":"TabPills"},{"name":"StatCard"},{"name":"FeatureCard"},{"name":"GlassCards"},{"name":"Testimonial"},{"name":"NewsTicker"},{"name":"DotSphere"},{"name":"HalftoneGlow"}]} */
(function () {
  "use strict";
  var PINK = [251, 100, 250], PURPLE = [137, 88, 218];

  function reduced() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }
  function fit(canvas) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var r = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(r.width * dpr));
    canvas.height = Math.max(1, Math.round(r.height * dpr));
    return dpr;
  }
  function mix(a, b, t) { return "rgb(" + Math.round(a[0] + (b[0] - a[0]) * t) + "," + Math.round(a[1] + (b[1] - a[1]) * t) + "," + Math.round(a[2] + (b[2] - a[2]) * t) + ")"; }

  /* A slowly turning sphere of dots: front dots bigger, brighter and pinker. One turn per --dur-orbit (36s). */
  function sphere(canvas, opts) {
    opts = opts || {};
    var n = opts.count || 700, tilt = 0.38, ga = Math.PI * (3 - Math.sqrt(5)), pts = [];
    for (var i = 0; i < n; i++) {
      var y = 1 - 2 * (i + 0.5) / n, r = Math.sqrt(1 - y * y), th = ga * i;
      pts.push([r * Math.cos(th), y, r * Math.sin(th)]);
    }
    var ctx = canvas.getContext("2d"), start = performance.now(), period = opts.period || 36000, raf;
    function draw(now) {
      var dpr = fit(canvas), w = canvas.width, h = canvas.height, R = Math.min(w, h) * 0.46, a = ((now - start) / period) * Math.PI * 2;
      ctx.clearRect(0, 0, w, h);
      var proj = pts.map(function (p) {
        var x = p[0] * Math.cos(a) + p[2] * Math.sin(a), z = -p[0] * Math.sin(a) + p[2] * Math.cos(a), y = p[1];
        var y2 = y * Math.cos(tilt) - z * Math.sin(tilt), z2 = y * Math.sin(tilt) + z * Math.cos(tilt);
        return [x, y2, z2];
      }).sort(function (p, q) { return p[2] - q[2]; });
      proj.forEach(function (p) {
        var d = (p[2] + 1) / 2;
        ctx.globalAlpha = 0.18 + 0.82 * d;
        ctx.fillStyle = mix(PURPLE, PINK, d);
        ctx.beginPath();
        ctx.arc(w / 2 + p[0] * R, h / 2 + p[1] * R, (0.7 + 1.9 * d) * dpr, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (!reduced() && opts.animate !== false) raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return function stop() { cancelAnimationFrame(raf); };
  }

  /* A halftone glow: a square dot grid whose dots swell toward the centre. Static; redraws on resize. */
  function halftone(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d");
    function draw() {
      var dpr = fit(canvas), w = canvas.width, h = canvas.height, pitch = (opts.pitch || 16) * dpr;
      ctx.clearRect(0, 0, w, h);
      for (var x = pitch / 2; x < w; x += pitch) {
        for (var y = pitch / 2; y < h; y += pitch) {
          var dx = (x - w / 2) / (w * 0.3), dy = (y - h / 2) / (h * 0.36), d = Math.sqrt(dx * dx + dy * dy);
          if (d >= 1) continue;
          var t = 1 - d;
          ctx.globalAlpha = 0.25 + 0.75 * t;
          ctx.fillStyle = "rgb(251,100,250)";
          ctx.beginPath(); ctx.arc(x, y, (0.6 + 2.6 * Math.pow(t, 1.6)) * dpr, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }
    draw();
    if (window.ResizeObserver) new ResizeObserver(draw).observe(canvas);
  }

  /* Numbered tab pills: aria-selected toggling inside any [role=tablist]. */
  function tabs(root) {
    (root || document).querySelectorAll(".ht-tabs").forEach(function (list) {
      list.addEventListener("click", function (e) {
        var t = e.target.closest(".ht-tab"); if (!t) return;
        list.querySelectorAll(".ht-tab").forEach(function (b) { b.setAttribute("aria-selected", b === t ? "true" : "false"); });
      });
    });
  }

  function ticker(root) {
    (root || document).querySelectorAll(".ht-ticker__track").forEach(function (t) {
      if (t.getAttribute("data-doubled")) return;
      t.innerHTML += t.innerHTML; t.setAttribute("data-doubled", "1");
    });
  }

  function init(root) {
    root = root || document;
    tabs(root); ticker(root);
    root.querySelectorAll("canvas[data-ht-sphere]").forEach(function (c) { sphere(c); });
    root.querySelectorAll("canvas[data-ht-halftone]").forEach(function (c) { halftone(c); });
  }

  window.Halftone = { version: "1.0.0", init: init, sphere: sphere, halftone: halftone, tabs: tabs, ticker: ticker };
})();
