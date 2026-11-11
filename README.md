# Swastika Watch

Bilingual site (Bangla by default, English via the switch, remembered per browser; `?lang=en` also works).

- `index.html`: **Hindutva 2026**. Programs the RSS and its affiliates ran, and the propaganda lines the RSS weekly
  Swastika pushed, in every 2026 issue (per-issue summaries plus a year overview). Generated from the OCR text by Claude
  (`tools/hindutva_summarize.sh`, `tools/hindutva_overview.sh`). Data: `data/hindutva.js`.
- `leaders.html`: **CPIM leaders**. Articles naming CPIM leaders, with links to the exact PDF page. Data: `data/mentions.js`.

Bengali text for both data files is added by `tools/translate_bn.py` (cached in `tools/bn_cache.json`).
Everything is regenerated every Sunday; existing summaries and translations are never redone.
