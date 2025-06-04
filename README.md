# DoctSync 🩺

A full-featured **MERN Stack Application** for managing doctor-patient interactions, admin controls, and mobile payments – built with scalability and real-world use cases in mind.

---

## 🔗 Live Demo
[🌐 Visit the Live App on Render](https://doctsync-frontend.onrender.com)
[🌐 Visit the Live App on Render](https://doctsync-admin.onrender.com)

---

## 📦 Tech Stack

### 🌐 Frontend (Admin + User Portal)
- **React.js** (with Context API)
- **React Router DOM**
- **Axios**
- **Tailwind CSS**
- **Vite**
- **React Toastify**
- **ESLint**

### 🛠 Backend
- **Node.js & Express**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)** – Secure token-based auth
- **Bcrypt** – Password hashing
- **Multer** – File/image uploads
- **Cloudinary** – Cloud storage
- **CORS** – API security
- **dotenv** – Secure environment variables

### 💰 Payments
- **M-PESA API** – Mobile money integration

---

## 🔐 User Roles & Authentication

- **Admin**
  - Add/remove doctors
  - Monitor user activities
- **Doctor**
  - View & manage appointments
  - Access patient records
- **User (Patient)**
  - Book appointments
  - View prescriptions
  - Make payments via M-PESA or Razorpay

All routes are protected using role-based JWT authentication.



