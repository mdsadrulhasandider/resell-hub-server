# ReSell Hub - Second-Hand Marketplace Platform

ReSell Hub is a production-quality, recruiter-friendly second-hand marketplace platform designed for users to buy and sell used products safely. The application features three customized roles (Buyer, Seller, Admin) with unique dashboard layouts, stripe checkout integration, real-time analytics charts, and a dynamic dark/light theme engine.

---

## 🌟 Key Features

* **Advanced Authentication**: Custom implementation of **Better Auth** with role-based routing guards, social login (Google), session persistence across reloads, and custom secure JWT generation.
* **Role-Based Dashboards**:
  * **Buyer**: Manage current orders, pay using Stripe card elements, review purchase history, and manage local wishlists.
  * **Seller**: Complete CRUD on listings, add items with condition, description, and images, monitor order fullfilment status, and review monthly sales charts.
  * **Admin**: Manage platform users, toggle verified badges for trusted sellers, delete/approve product listings, and audit platform trade volumes.
* **Stripe Payments**: Real-time card intent generation with card input validation, transaction logs, and duplicate payment safeguards.
* **Adaptive Theme Engine**: Clean integration of DaisyUI v5 theme layers, switching between dark and light themes dynamically.
* **Dynamic Analytics**: Interactive Line, Bar, and Area charts using **Recharts** displaying sales growth, monthly registration counts, and earnings.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite build system)
- **React Router DOM v7** (Nested client routes)
- **Tailwind CSS v4 & DaisyUI v5** (Responsive layout styling)
- **Recharts** (Visual data analytics)
- **Framer Motion** (Page entry transitions)
- **Axios** (Secure API interceptors)
- **React Hot Toast** (User status alerts)

### Backend
- **Node.js & Express.js** (ES Modules configuration)
- **MongoDB** (Native client drivers)
- **Better Auth & @better-auth/mongodb-adapter** (Secure session and cookie managers)
- **Stripe SDK** (Payment gateway)
- **JSONWebToken (JWT)** (Custom routing authorizations)

---

## 📦 NPM Packages Used

### Client
- `better-auth`
- `axios`
- `recharts`
- `framer-motion`
- `react-router-dom`
- `react-icons`
- `react-hot-toast`
- `@stripe/stripe-js`
- `@stripe/react-stripe-js`

### Server
- `better-auth`
- `@better-auth/mongo-adapter`
- `express`
- `mongodb`
- `jsonwebtoken`
- `stripe`
- `cors`
- `dotenv`
- `nodemon` (Development compiler)

---

## 🔑 Environment Variables Setup

### Client (`client/.env.local`)
```env
VITE_BETTER_AUTH_URL=http://localhost:5000
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Server (`server/.env`)
```env
PORT=5000
DB_URI=mongodb://127.0.0.1:27017/resellHubDB
JWT_SECRET=your_super_secret_jwt_signing_key_32_chars
STRIPE_SECRET_KEY=your_stripe_secret_key
BETTER_AUTH_SECRET=your_better_auth_session_secret_32_chars
BETTER_AUTH_URL=http://localhost:5000
```

---

## 🚀 Installation & Local Startup

### 1. Prerequisite
Ensure you have **MongoDB** installed and running on your local machine (`mongodb://127.0.0.1:27017`).

### 2. Clone the Repository
```bash
git clone <repository-url>
cd B13-A10_category-01
```

### 3. Server Setup & Startup
```bash
cd server
npm install
# Create .env and populate variable credentials
npm run dev
```

### 4. Client Setup & Startup
```bash
cd ../client
npm install
# Create .env.local and populate VITE credentials
npm run dev
```

---

## 🔗 Project Links

* **Live URL Placeholder**: `https://mdsadrulhasandider-resell-hub-pro.vercel.app`
* **Client Code Repository**: `https://github.com/mdsadrulhasandider/resell-hub-client.git`
* **Server Code Repository**: `https://github.com/mdsadrulhasandider/resell-hub-server.git`
