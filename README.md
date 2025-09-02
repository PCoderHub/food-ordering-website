# 🍔 Food Delivery App - [Live Demo](https://hungerly.netlify.app/)

## 📌 Overview
This is a Food Delivery Web Application built with React and Redux that allows users to browse a menu, filter food items by category, search for specific dishes, add them to a cart, and place an order. It includes dark mode support and is mobile-friendly for a smooth user experience.

---

## 🚀 Features

### User-Facing Features
- **Homepage**
    - Featured categories which directs to items of corresponding category and Menu section with food items.
    - Search bar
- **Menu Item Page**
    - See details with descriptions and images of each food item.
- **Cart Functionality**
    - Add items to cart
    - Update quantity or remove items.
    - Clear entire cart
    - View total price
- **Order Management**
    - Order summary and checkout confirmation
    - My Orders page to view past orders
- **User Interface**
    - Dark/light mode toggle
    - Mobile-responsive design
- **Static pages**
    - About Us
    - Contact Us

### Admin Features
- **Inventory Management**
    - Add, update, or remove food items
    - Add or remove categories
- **Order Management**
    - View orders placed by users

---

## ▶️ Usage Guide

### Authentication

- **Register/Login:** `/user-auth`
    - Register and login as `admin@admin.com` to access Admin features. 
    - Use any email for user access.

> **Note:** Currently, user sessions are **not persisted**. Logging out will require users to **register and login again** to access the app.
> This behavior may be improved in future after backend integration.

### Navigation

- **Home Page:** `/`  
  - View Menu items: `/menu/:itemId`  
  - Browse featured categories: `/category/:categoryId`  
  - Search for dishes using the search bar

- **Menu Item Page:** `/menu/:itemId`  
  - Click "Click to View" on any item in home page or category page to see details  
  - Add to Cart from the item view

- **Cart Page:** `/cart`  
  - Update quantity, remove items, or clear the cart  
  - See total price

- **Checkout:** `/checkout`  
  - Review order before confirming  
  - Access only for logged-in users  
  - View success message after placing an order

- **My Orders:** `/orders`  
  - View all orders placed by the logged-in user

- **Admin Page:** `/admin`  
  - Manage categories and food items  
  - View orders from all users

- **Other Pages:**  
  - About Us: `/about`  
  - Contact Us: `/contact`

### UI Features
- **Dark Mode:** Toggle via header section

## 🛠 Tech Stack
- **Frontend:** React, Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Deployment:** Netlify