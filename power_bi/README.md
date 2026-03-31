# Power BI: Trattoria Luigi Digital Transformation

## Power BI Template (.pbit)
This folder contains the Power BI Template (`.pbit`) for the project. 

**Why a Template?**
- **Version Control**: `.pbit` files are much smaller than `.pbix` files because they don't contain the data itself, making them suitable for Git.
- **Portability**: When you open the `.pbit`, Power BI will prompt you for the file path to the `data/processed/` folder on your local machine.

## Custom Theme
The `custom_theme.json` file provides a consistent visual identity for the dashboard, using Trattoria-inspired colors (Red/Black/Gray) and professional typography.

### How to Apply the Theme:
1. Open the Power BI file.
2. Go to the **View** tab in the ribbon.
3. Click the dropdown in the **Themes** section.
4. Select **Browse for themes** and choose `custom_theme.json`.

## Dashboard Roadmap
1. **The Baseline**: Current revenue, reach, and cost structure (As-Is).
2. **The Shift**: Projected growth in customer reach through digital channels.
3. **The Margin**: Comparison of third-party delivery vs. direct digital ordering.
4. **The Future**: Projected Revenue and ROI of the "Pasta Club" subscription model.
