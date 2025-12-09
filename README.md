<h1 align="center"><b>SwadKart – MERN Stack Food Ordering Website</b></h1>
<p align="center">
  SwadKart is a modern and secure MERN Stack–based food ordering platform that makes online food shopping fast, easy, and reliable.  
  It offers user and admin panels, JWT authentication, Stripe payment integration, add-to-cart functionality, and real-time order management — delivering a seamless food ordering experience from start to finish.
</p>

## 🚀 Demo

**User Panel:** https://swadkart-food-delivery4.onrender.com  
**Admin Panel:** (Coming Soon)

## 🧩 Tech Stack

### **Frontend**
- React.js  
- React Router  
- Context API / State Management  
- Axios  
- CSS / Responsive UI  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  
- REST API Architecture  

### **Authentication & Security**
- JWT (JSON Web Token)  
- Bcrypt Password Hashing  
- Role-Based Authentication  

### **Payments**
- Stripe Payment Gateway  

### **Deployment**
- Render (Backend + Frontend Hosting)  
- Cloudinary / Local Storage for Images (if used)  

## 📂 Project Structure

<pre>
swadkart-food-delivery/
│
├── admin/                   ← Admin Panel (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/          ← Images, icons, static files
│   │   ├── components/      ← Reusable React components
│   │   ├── pages/           ← Admin dashboard pages
│   │   ├── App.jsx          ← Admin App root
│   │   └── main.jsx         ← Entry file for Admin React app
│   └── package.json
│
├── frontend/                ← User Panel (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/          ← UI images, logos
│   │   ├── components/      ← Reusable UI components
│   │   ├── context/         ← StoreContext (global state)
│   │   │   └── StoreContext.js
│   │   ├── pages/           ← Home, Menu, Cart, Orders
│   │   ├── App.jsx          ← User App root
│   │   └── main.jsx         ← Entry file for User React app
│   └── package.json
│
├── backend/                 ← Backend Server (Node + Express)
│   ├── controllers/         ← API controller logic
│   │   └── orderController.js
│   ├── models/              ← MongoDB models (User, Product, Order)
│   ├── routes/              ← All backend routes
│   ├── middleware/          ← Auth, multer, verifyToken
│   ├── uploads/             ← Multer uploaded images
│   ├── server.js            ← Backend entry point
│   ├── .env                 ← Environment variables file
│   └── package.json
│
├── README.md                ← Project documentation
└── .gitignore
</pre>



## ⭐ Features

### **👤 User Panel**
- Login / Signup  
- Logout  
- Add to Cart  
- Place Order  
- View Order History  
- Filter Food Products  
- Beautiful Alerts & Smooth UI Experience  

### **🛠️ Admin Panel**
- Products Management (Add, Edit, Delete)  
- Order Management  
- Role-Based Access  
- Authenticated Admin APIs  

### **🔐 Authentication & Security**
- JWT Authentication  
- Password Hashing using Bcrypt  
- Role-Based Identification  
- Secure REST APIs  

### **💳 Payments**
- Stripe Payment Integration  
- Secure & Fast Checkout  

### **⚙️ Backend Functionality**
- Fully Functional REST APIs  
- Protected Routes  
- Efficient Data Handling with MongoDB  
## 🛠️ Run Locally

### ** Clone the Project**


Clone the project

```bash
    git clone https://github.com/Sadanand87/swadkart-food-delivery.git

```
Go to the project directory

```bash
    cd Food-Delivery
```
Install dependencies (frontend)

```bash
    cd frontend
    npm install
```
Install dependencies (admin)

```bash
    cd admin
    npm install
```
Install dependencies (backend)

```bash
    cd backend
    npm install
```
Setup Environment Vaiables

```Make .env file in "backend" folder and store environment Variables
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
 ```

Setup the Frontend and Backend URL
   - App.jsx in Admin folder
      const url = YOUR_BACKEND_URL
     
  - StoreContext.js in Frontend folder
      const url = YOUR_BACKEND_URL

  - orderController in Backend folder
      const frontend_url = YOUR_FRONTEND_URL 

Start the Backend server

```bash
    nodemon server.js
```

Start the Frontend server

```bash
    npm start
```

Start the Backend server

```bash
    npm start
```

**🚀 Deployment**


App is deployed on Render.
To deploy your own version, connect the repo to Render, add environment variables, and deploy frontend + backend services.

**🤝 Contributing**


Contributions are welcome!

Fork the repo

Create a branch

Make changes

**Submit a pull request**

💬 Feedback
If you have feedback or suggestions, feel free to open an issue or contact me anytime.



