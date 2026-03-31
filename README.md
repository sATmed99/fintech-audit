# German Fintech Market Audit & Digitalization

<p align="center">
   <img src="docs/fintech_audit.gif" alt="Fintech Audit Demo" />
</p>

## Executive Summary: The "Burning Platform" for German Retail Banking
The German retail banking sector, particularly the **Sparkassen-Finanzgruppe**, faces an unprecedented "burning platform." As digital-native neo-banks (N26, Revolut, Solaris) erode market share and the European Central Bank (ECB) maintains volatile interest rate environments, the traditional branch-heavy model is becoming unsustainable. This project provides a **Digital Business Model Audit** of the German market, quantifying the decline in physical branch relevance against the surge in digital adoption.

## 1. The Business Model Canvas (BMC)
We mapped the "As-Is" state of a traditional German Sparkasse and the "To-Be" digital model of a Neo-bank.
- **Traditional (As-Is)**: Branch-heavy, manual processes, high overhead, local focus.
- **Digital (To-Be)**: Mobile-first, automated KYC/AML, low overhead, borderless operations.

## 2. Identified Digital Pain Points (German Market)
1. **Branch Density Overload**: Germany has one of the highest branch-per-capita ratios in the EU, leading to massive operational overhead.
2. **Legacy Infrastructure**: Traditional banks struggle with core banking systems that are 30+ years old, hindering rapid digital innovation.
3. **Neo-bank Disruption**: Digital-native banks are capturing the "Next-Gen" demographic (18-35) with superior UX and lower fees.

## 3. The Data Stack
This project programmatically integrates live data streams from:
- **Deutsche Bundesbank**: Historical interest rates and banking statistics.
- **European Central Bank (ECB)**: Digital adoption metrics and monetary indicators.
- **Eurostat**: Branch counts and demographic digital literacy across the EU.

## Repository Structure
```plaintext
├── .github/workflows/      # CI/CD for automated weekly data refresh
├── data/                   # Raw and Processed CSVs (Gitignored)
├── scripts/                # Python scripts for ETL (Acquisition & Cleaning)
├── power_bi/               # .pbit (Template) and Theme JSONs
├── docs/                   # BMC Mapping, Market Audit, and Data Dictionary
├── README.md               # The "Pitch" and Setup Guide
└── requirements.txt        # Python dependencies
```

## Power BI Dashboard Narrative
The dashboard visualizes the German Fintech landscape across 4 pages:
1. **The Crisis**: Visualizing the inverse correlation between branch counts and operational costs in Germany.
2. **The Market**: Benchmarking German digital adoption against EU leaders (Nordics/Estonia).
3. **The Solution**: Modeling the ROI of digital-first customer acquisition for traditional banks.
4. **The Benchmark**: Real-time tracking of interest rate impacts on retail deposit margins.

## Deployment Guide
1. **Environment Setup**:
   ```bash
   pip install -r requirements.txt
   ```
2. **Data Acquisition**:
   Run the Python scripts to fetch and clean the latest data:
   ```bash
   python scripts/data_acquisition.py
   python scripts/cleaning.py
   ```
3. **Power BI Connection**:
   - Open `power_bi/German_Fintech_Audit.pbit`.
   - When prompted, provide the absolute path to your `data/processed/` folder.
