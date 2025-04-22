# InTechHub Dashboard

![image](https://github.com/user-attachments/assets/57278276-d4f1-47ea-b521-e4fcee6d4870)
 A modern, responsive dashboard template built with HTML, CSS, and JavaScript, featuring data visualizations using various charting libraries. This project demonstrates dynamic content loading and effective management of JavaScript library dependencies.

## ✨ Features

* **Responsive Layout:** Adapts to different screen sizes (desktop, tablet, mobile).
* **Dynamic Content Loading:** Sections of the dashboard (sidebar, header, cards, charts, map, table) are loaded dynamically using JavaScript/jQuery.
* **Overview Cards:** Displays key metrics with accompanying sparkline charts (using ApexCharts).
* **Geographic Data Visualization:** Interactive map of India showing data points (using amCharts).
* **Sales & Performance Charts:** Visualizations for earnings and profit/loss data (using Chart.js).
* **Customer Order Details:** Table displaying order information with sorting functionality (implemented with jQuery).
* **Clean & Organized Code:** Project structured into separate HTML partials, CSS, and JavaScript files.

## 🚀 Technologies Used

* **HTML5**
* **CSS3** (Custom styles and likely leveraging Bootstrap's grid and components)
* **JavaScript**
* **Bootstrap 5:** Frontend framework for styling and responsiveness.
* **jQuery:** For DOM manipulation and dynamic content loading (`.load()`).
* **ApexCharts:** For creating the overview sparkline charts.
* **amCharts v5:** For rendering the interactive India map.
* **Chart.js:** For creating the Earnings (Doughnut) and Profit & Loss (Bar) charts.

## 📂 File Structure

```
.
├── assets/
│   ├── icons/          # SVG icons
│   ├── images/         # Logos, profile picture, etc.
│   └── ...
├── css/
│   └── style.css       # Custom CSS styles
├── js/
│   ├── apex-charts.js    # Code for ApexCharts initialization
│   ├── charts-config.js  # Code for Chart.js initialization (earnings, profit/loss)
│   ├── india-map.js      # Code for amCharts map initialization
│   ├── main.js           # Main script for dynamic loading and initialization calls
│   ├── table-actions.js  # Code for table sorting/actions
│   └── ...
├── partials/           # HTML snippets loaded dynamically
│   ├── charts-row.html
│   ├── customer-map.html
│   ├── customer-orders.html
│   ├── header.html
│   ├── overview-cards.html
│   ├── sidebar.html
│   └── ...
└── index.html          # The main dashboard page
```

## 🚶 Walkthrough Demo

Once you open `index.html` in your browser, you should see the dashboard interface.

1.  **Sidebar:** (Describe the sidebar's purpose and navigation links)
2.  **Header:** (Describe the header area, title, icons, and user profile)
3.  **Overview Section:** Located at the top of the main content area. You will see four cards displaying key metrics (Customer Visits, Total Orders, Total Pending, Total Delivered). Each card should feature a small **sparkline chart** below the numbers (rendered by **ApexCharts**).
4.  **Customer Visit & Income Section:** Below the overview cards.
    * On the left, the **India Map** should be displayed (rendered by **amCharts**). You might see markers on the map representing customer locations.
    * On the right, the **Income Received By** list shows various payment methods and amounts.
5.  **Charts Row:** Further down, you'll find two larger chart sections.
    * **Total Target Achieved:** (Describe this section and any visual elements if not a standard chart, e.g., the circular progress bar).
    * **Total Earnings:** This section should display a **Doughnut chart** (rendered by **Chart.js**) visualizing the breakdown of earnings (Profits, Margins, etc.).
    * **Total Profit & Lost:** This section should display a **Bar chart** (rendered by **Chart.js**) showing profit and loss over days.
6.  **Customer Order Details:** At the bottom, you'll see a table listing customer orders.
    * The table headers have a "⋮" icon. Clicking this icon next to a column header should reveal a dropdown with a **"Sort"** option.
    * Clicking "Sort" should **sort the table rows** based on the data in that column (implemented using the **table-actions.js** script).

## 🙏 Thank You for exploring my Project.
