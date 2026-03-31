import pandas as pd
import requests
import os
from pathlib import Path

# URLs for German Fintech Market Analytics
DATA_SOURCES = {
    "bundesbank_interest": "https://www.bundesbank.de/statistic-external/lookfor/csv/BBK01.SU0101.csv",
    "ecb_digital_adoption": "https://sdw-wsrest.ecb.europa.eu/service/data/ECB,MIR,M.DE.B.L21.A.R.A.2240.EUR.N?format=csvdata",
    "eurostat_branches": "https://ec.europa.eu/eurostat/api/dissemination/sdmx/2.1/data/isoc_bde15cua?format=TSV&compressed=false"
}

def download_data():
    raw_dir = Path("data/raw")
    raw_dir.mkdir(parents=True, exist_ok=True)
    
    for name, url in DATA_SOURCES.items():
        print(f"Downloading {name}...")
        try:
            response = requests.get(url)
            response.raise_for_status()
            file_path = raw_dir / f"{name}.csv"
            with open(file_path, "wb") as f:
                f.write(response.content)
            print(f"Successfully saved to {file_path}")
        except Exception as e:
            print(f"Error downloading {name}: {e}")

if __name__ == "__main__":
    download_data()
