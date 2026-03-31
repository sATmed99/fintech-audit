# Copilot Workspace Instructions for Fintech Audit

## Project Overview
This workspace analyzes the digital transformation of the German retail banking sector, focusing on the Sparkassen-Finanzgruppe. It combines Python ETL scripts, Power BI analytics, and business model documentation to audit and redesign traditional banking models for the digital era.

## Build & Run
- **Python ETL:**
  - Data acquisition: `python scripts/data_acquisition.py`
  - Data cleaning: `python scripts/cleaning.py`
  - Dependencies: `pip install -r requirements.txt`
- **Power BI:**
  - Open Power BI templates in `power_bi/`.
  - Apply the custom theme from `power_bi/custom_theme.json`.

## Key Directories
- `scripts/`: Python ETL scripts for data collection and cleaning.
- `power_bi/`: Power BI templates and themes for analytics.
- `docs/`: Business model canvas, methodology, and data dictionary.

## Conventions & Tips
- **Data:** Raw and processed data is not tracked in Git. Place data files in a local `data/` directory.
- **Documentation:** Link to docs in `docs/` rather than duplicating content in code or comments.
- **Power BI:** Use `.pbit` templates for version control; do not commit `.pbix` files with embedded data.
- **CI/CD:** Automated data refresh is handled via GitHub Actions (see `.github/workflows/`).

## Common Pitfalls
- Mismatched data formats: Ensure all dates are standardized (YYYY-MM-DD).
- Missing dependencies: Always install from `requirements.txt` before running scripts.
- Power BI file paths: Update data source paths when opening templates on a new machine.

## Further Reading
- See `docs/business_model_canvas.md` for BMC mapping.
- See `docs/methodology.md` for ETL and analytics methodology.
- See `docs/data_dictionary.md` for KPI and data definitions.

---
For agent customization, see `/create-agent` or `/create-instruction` prompts for advanced automation and workflow tailoring.
