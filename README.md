# 💰 Donation Tracking Dashboard (MERN)

A simple and clean **Donation Tracking Dashboard** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It displays **total donations**, **number of donors**, and includes a **chart + table** for visualizing donation trends.

---

## 🚀 Features

- 📊 Real-time Donation Tracking  
- 👥 Donor Count Display  
- 📈 Simple Chart & Table Visualization  
- ⚙️ Built with Vite + TailwindCSS for super-fast UI  
- ☁️ Backend powered by Express & MongoDB  

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite) + Tailwind CSS |
| Backend | Node.js + Express |
| Database | MongoDB (via Mongoose) |
| Hosting | Netlify (frontend) + Render (backend) |

---

## 📁 Folder Structure

DonationTrackingDashboard/
│
├── backend/ # Express + MongoDB API
│ ├── index.js
│ ├── package.json
│ ├── routes/
│ └── models/
│
├── frontend/ # React + Vite + Tailwind Dashboard
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── index.css
│ │ └── main.jsx
│ ├── package.json
│ ├── vite.config.js
│ └── netlify.toml
│
└── README.md

yaml
Copy code

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ASUS-TUFLSR/DonationTrackingDashboard.git
cd DonationTrackingDashboard
2️⃣ Setup the Backend (Express + MongoDB)

cd backend
npm install
Create a .env file inside the backend folder:

init
PORT=5000
MONGO_URI=your_mongodb_connection_string

Run the backend:
npm start
Your backend should now run on:
👉 http://localhost:5000


3️⃣ Setup the Frontend (React + Vite)
Open a new terminal:
cd frontend
npm install
Create a .env.local file inside the frontend folder:
VITE_API_BASE_URL=http://localhost:5000

Start the frontend:
npm run dev
Your frontend will be available at:
👉 http://localhost:5173

🧱 Build for Production
To create an optimized production build of the frontend:


cd frontend
npm run build
This will generate a dist/ folder ready for deployment.

🌍 Deployment
Frontend on Netlify
Go to https://app.netlify.com

Add a new site → “Import from Git”

Base directory: frontend

Build command: npm run build

Publish directory: dist

Click Deploy

💡 If you want to deploy manually, run npm run build and upload the dist/ folder to https://app.netlify.com/drop

Backend on Render
Go to https://render.com

Create a new Web Service

Set root directory to backend

Build command: npm install

Start command: node index.js

Add environment variables:


PORT=10000
MONGO_URI=your_mongodb_connection_string
Deploy 🎉

After deployment, Render will give you a live API URL such as:


https://donation-tracker-backend.onrender.com
Update your frontend .env:

VITE_API_BASE_URL=https://donation-tracker-backend.onrender.com
Rebuild and redeploy your frontend.

🧪 Example API Endpoint

GET /api/donations
Returns:

json
Copy code
[
  {
    "donorName": "John Doe",
    "amount": 100,
    "date": "2025-11-01T10:00:00Z"
  }
]

🧑‍💻 Development Commands
Task	Command
Run frontend	npm run dev
Run backend	npm start
Build frontend	npm run build
Install deps	npm install
Deploy frontend (Netlify)	npm run build + upload dist/
Deploy backend (Render)	auto from GitHub

💬 Credits
Built with ❤️ by Manmit Pal
A simple MERN dashboard made for learning, data visualization, and project demonstration.

🪄 License
This project is open-source under the MIT License.
