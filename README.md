
# 💰 Expense Tracker Application

A full-stack Expense Tracker application with user authentication, expense management, and PDF report generation.

## 📦 Tech Stack

- **Frontend:** React
- **Backend:** Nest.js (Port: `3000`)
- **Database:** (mysql8)
- 
## 🚀 Features

- 🔐 User Authentication (Register & Sign In)
- 🧾 Add, View, and Delete Expenses
- 📄 Download Expenses as a PDF Report
- Responsive and user-friendly UI

---

## 📁 Project Structure

expense-tracker

├── backend/ # Nest.js
├── frontend/ # React application

└── README.md


## 🛠️ Setup Instructions

### 🔙 Backend (Port `3000`)

1. Navigate to the backend folder:

2. Install dependencies:
    npm install
3. Create a `.env` file and add required environment variables:

    ```env
    PORT=3000
    for your easy access I haven't addeded env you can easily access the code db details in main.ts which is not preferred way but for sample I have given it

4. Start the backend server:
    npm start

### 🌐 Frontend (Any available port)

1. Navigate to the frontend folder:


2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file to specify your backend API URL:

    ```env
    REACT_APP_API_BASE_URL=http://localhost:any
    ```

4. Start the frontend:

    ```bash
    npm start
    ```

---

## 🔐 Authentication

- Register using email and password
- Sign in to access the dashboard

---

## 📊 Expense Management

- Add expenses with description, amount
- View expenses in a list format
- Delete unwanted entries


## 📥 PDF Download

- Click "Download as PDF" to generate a report of your expenses
- PDF is generated via backend and downloaded from frontend

