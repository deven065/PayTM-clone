## 💸 PayTM Clone
A basic full-stack PayTM clone that allows users to sign up, log in, and manage their account balances — built with MongoDB, Express, and React 🚀

---

## 🌟 Features

- **User Authentication**: Signup and Signin with JWT-based authentication.
- **Account Management**: Create accounts with random initial balances.
- **Fund Transfers**: Securely transfer funds between accounts.
- **Search Users**: Search users by first or last name with regex filtering.
- **Secure Passwords**: Passwords can be  hashed using `bcrypt` for maximum security, I have not done that but planning to do (coming soon...).
- **RESTful API**: Clean and modular API design for seamless integration.

---

## 🛠️ Tech Stack

### **Backend**
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and account data.
- **Mongoose**: ODM for MongoDB.
- **Zod**: Schema validation for request data.
- **JWT**: Secure user authentication.
- **Bcrypt**: Password hashing for enhanced security.(Coming Soon...)

### **Frontend**
- **React**: Frontend library for building user interfaces.
- **Vite**: Fast development environment for React.

---

## 📂 Folder Structure
📁 PayTM-clone/
├── 🖥️ backend/              # Express API with MongoDB
│   ├── config.js           # JWT secret config
│   ├── db.js               # Mongoose schemas & DB connection
│   ├── index.js            # Backend entry point
│   ├── middleware.js       # Authentication middleware
│   └── routes/             # Modular route handlers
│       ├── user.js         # User operations
│       ├── account.js      # Balance operations
│       └── index.js        # Routes aggregator
│
├── 🌐 frontend/             # React-based client UI
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── main.jsx        # React root mount
│   │   └── index.css       # Global styles
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies


---

## 🚀 Features
* 🔐 User Authentication — JWT-based secure login system

* 💰 Account Management — View and manage balances

* 🛠️ RESTful APIs — Modular and scalable API structure

* ⚛️ React Frontend — Blazing fast interface with Vite

## ⚙️ Tech Stack
* Frontend: React, Vite, CSS

* Backend: Node.js, Express.js

* Database: MongoDB with Mongoose

* Auth: JWT-based authentication

* Others: CORS, BodyParser

## 🧪 How to Run Locally
# ✅ Prerequisites
* Node.js

* MongoDB (running locally)

* npm or yarn

### 📦 Backend Setup

* cd backend
* npm install
* node index.js
# 🔐 Make sure MongoDB is running locally at mongodb://localhost:27017/paytm.

### 🌐 Frontend Setup
* cd frontend
* npm install
* npm run dev

### 🔐 JWT Secret
* The secret is stored in backend/config.js
* For development:
* const JWT_SECRET = "devensecret";

### 🧠 Project Highlights
* Clean architecture for scalable growth

* Separate account and user schema for flexibility

* MongoDB schema validation for data integrity

* Simple, readable code — great for beginners!

### 📌 Next Improvements (Optional Ideas)
* Add transactions and history
* Connect to a real payment gateway API
* Add error handling and UI feedback
* Integrate Tailwind CSS or Material UI

# 👨‍💻 Author
Made with ❤️ by Deven Rikame
