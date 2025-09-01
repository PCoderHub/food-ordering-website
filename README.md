# 🍔 Food Delivery App [Live Demo](https://hungerly.netlify.app/)

## 📌 Overview
This is a Food Delivery Web Application built with React and Redux that allows users to browse a menu, filter food items by category, search for specific dishes, add them to a cart, and place an order. It includes dark mode support and is mobile-friendly for a smooth user experience.

## 🚀 Features
- Homepage with featured food items and categories with search and category filter
- Menu page with food items, images, and descriptions
- Add to Cart & Clear Cart functionality
- Cart page with selected items, quantity, and total price
- Order summary and checkout confirmation
- Mobile responsive design
- Dark mode toggle
- About Us & Contact Us pages

## 🛠 Tech Stack
- Frontend: React, Tailwind CSS
- State Management: Redux Toolkit
- Routing: React Router
- Deployment: Netlify

## ▶️ Usage

- Register and login page (/user-auth) : Login as admin@admin.com to get Admin access.
- Home Page (/) : View featured items (/menu/:itemId) and categories (/category/:categoryId). Browse all food items, filter by category, or search using the search bar.
- Add to Cart : Click the Add to Cart button after clicking Click to View button on any item.
- Cart Page (/cart) : View your selected items, update quantity or remove item, see total price.
- Clear Cart : Remove all items from the cart.
- Order Summary (/checkout) : Review your items before confirming the order.
- My Orders page (/orders): To view orders placed by the loggedin user
- Checkout (/checkout): See an Order Success message after placing an order (Access only for users).
- Dark Mode: Toggle dark/light theme from the navbar.
- About Us (/about) & Contact Us (/contact) : Static informational pages.
- Admin Page (/admin) : To add/remove categories, add/update/remove items for inventory management. View orders made by users.