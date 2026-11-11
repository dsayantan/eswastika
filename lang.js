// Language switch shared by both pages. Bangla is the default; choice is remembered.
(function(){
  let lang = "bn";
  try { const u = new URLSearchParams(location.search).get("lang"); lang = u || localStorage.getItem("sw-lang") || "bn"; } catch(e) {}
  if (lang !== "en") lang = "bn";
  window.LANG = lang;
  document.documentElement.lang = lang;
  // pick the Bengali field (<key>_bn) when showing Bangla
  window.L = (o, k) => (lang === "bn" && o && o[k + "_bn"] != null && o[k + "_bn"] !== "") ? o[k + "_bn"] : (o ? o[k] : "");
  window.T = (bn, en) => lang === "bn" ? bn : en;
  window.LOC = lang === "bn" ? "bn-IN" : "en-GB";
  window.NUM = n => lang === "bn" ? String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]) : String(n);
  window.setLang = l => { try { localStorage.setItem("sw-lang", l); } catch(e) {}
    const u = new URL(location.href); u.searchParams.delete("lang"); location.href = u.toString(); };
})();
