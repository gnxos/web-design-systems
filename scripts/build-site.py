#!/usr/bin/env python3
"""Fill scripts/site.template.html with live data and write site.html.
Run after build-downloads.py:   python3 scripts/build-site.py"""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
comp = json.load(open(f"{ROOT}/designs/components.json"))
man = json.load(open(f"{ROOT}/downloads/manifest.json"))
data = json.dumps({"components": comp, "manifest": man}, separators=(",", ":"))
t = open(f"{ROOT}/scripts/site.template.html").read()
assert "/*__DATA__*/{}" in t
open(f"{ROOT}/site.html", "w").write(t.replace("/*__DATA__*/{}", data))
print("site.html written,", len(data), "bytes of data")
