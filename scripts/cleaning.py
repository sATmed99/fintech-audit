import pandas as pd
from pathlib import Path

def clean_fintech_data():
    raw_dir = Path("data/raw")
    processed_dir = Path("data/processed")
    processed_dir.mkdir(parents=True, exist_ok=True)
    
    # 1. Clean Bundesbank interest rates
    interest_file = raw_dir / "bundesbank_interest.csv"
    if interest_file.exists():
        print(f"Cleaning {interest_file}...")
        try:
            # Bundesbank CSVs often have metadata in the first few rows
            df = pd.read_csv(interest_file, skiprows=5)
            df.columns = ["Date", "Rate"]
            df["Date"] = pd.to_datetime(df["Date"], errors="coerce")
            df = df.dropna(subset=["Date"])
            df.to_csv(processed_dir / "interest_rates_processed.csv", index=False)
            print("Successfully cleaned interest rates.")
        except Exception as e:
            print(f"Error cleaning interest rates: {e}")

    # 2. Clean Eurostat branches
    branches_file = raw_dir / "eurostat_branches.csv"
    if branches_file.exists():
        print(f"Cleaning {branches_file}...")
        try:
            # Eurostat TSV often needs unpivoting
            df = pd.read_csv(branches_file, sep="\t")
            # Unpivot years
            id_vars = df.columns[0]
            df = df.melt(id_vars=[id_vars], var_name="Year", value_name="Value")
            df.to_csv(processed_dir / "branches_processed.csv", index=False)
            print("Successfully cleaned branches.")
        except Exception as e:
            print(f"Error cleaning branches: {e}")

if __name__ == "__main__":
    clean_fintech_data()
