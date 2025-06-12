# 🔍 React Filter Optimization Dashboard

A dynamic and responsive business intelligence dashboard built using React.js. This project mimics Amazon-style filtering functionality using modular arithmetic (`modX` values) and displays data in a smart, interactive table.

## 📌 Features

- 📊 Paginated and scrollable data table (100 rows per page, 20 visible at a time)
- 🔍 Multi-select dropdown filters for each `modX` column
- 🔄 Smart filter-to-filter interaction (only relevant options appear)
- ⚡ Fast filtering with support for large datasets
- 💡 Clean UI with search and reset options
- ✅ Fully responsive and ready to extend

## 🧠 How It Works

- Each row contains multiple modulo values (mod3, mod4, etc.)
- Filters dynamically update other filters based on selection
- Data is narrowed down based on active filters
- Uses CSV files (`dataset_small.csv` and `dataset_large.csv`) loaded into the app

## 🛠️ Tech Stack

- React.js
- TypeScript-ready structure
- `react-data-table-component` for table UI
- `multiselect-react-dropdown` for filters
- CSV parsing and state-based filtering

## 🚀 Getting Started

### 1. Clone the repo

git clone https://github.com/tushar1707/react-filter-dashboard.git
cd react-filter-dashboard
2. Install dependencies

npm install
3. Start the development server

npm start
The app will run on http://localhost:3000

📂 Project Structure

react-filter-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── data/
│   ├── App.js
│   ├── index.js
│   └── utils/
├── dataset_small.csv
├── dataset_large.csv
└── package.json
📈 Future Improvements
Add Redux/Context API for global state

TypeScript support

Unit testing with Jest

Export filtered data to CSV

Deploy to Vercel/Netlify

Made with ❤️ for frontend filter optimization challenges.




