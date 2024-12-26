
#  Voucher App

## Overview

Voucher App is a modern web application designed to manage vouchers efficiently. The app comes with features such as authentication, sorting, searching, pagination, and a comprehensive dashboard. Users can manage products, sales, vouchers, and their profiles, including updating their profile images and passwords.


## 1. Authentication

- 🔒 Secure login and registration system..
- 🔐 Protect routes and resources based on user roles

## 2. Sorting

- ⬆️⬇️ Sort data by specific fields (e.g., name, date, price).
- ↕️ Supports ascending and descending order with sort_direction

## 3. Search

- 🔍 Powerful search functionality to find vouchers, products, and sale products list for sale.

## 4. Pagination

- 📄 Efficient pagination for large datasets.
- 📊 Control the number of items displayed per page using limit.(Support limit up to 100 maximum).

## 5.Dashboard

- 📈 Overview of total balance,products,voucher, tax and latest voucher lists.

- 🗂️ Easy navigation to different sections of the app


## 6. Products

-  🛍️ Add, edit, and delete products.
- 📋 Manage product details like name, price, and description.


## 7. Sales

- 💰 Track and manage sales records.
- 📊 Visualize sales data with sorting and filtering options.


## 8. Vouchers

- 🎟️ Create and check vouchers details with print and downloadable image or pdf.
- 🔄 Search, sort, and paginate voucher lists.

## 9. User Profile

- 👤 Update profile details, including name and image.
- 🔑 Change passwords securely.


##  Tech Stack

**React:**   JavaScript library for building user interfaces

**React Router:** Using React Router for navigation with nested routes

**Tailwindcss:**   Styling for responsive layout and UI/UX 

**Typescript :** Adds type safety to JavaScript

**Zustand :** Zustand for managing global state

**React Query :** API data fetching and caching

**React Hook Form :**: Simplifies form handling and validation

**Zod :**: Zod: Schema-based form validation to ensure data correctness

**Laravel API :** The Laravel API has been used for products,vouchers,user profile. 


## ⚙️ Setup and Installation

Clone the repository

```bash
  git clone https://github.com/sisaung/voucher-app.git
  cd voucher-app
```
    
Install Dependencies

```bash
  npm install
```

Add Evnironmen Set Up

 - Create a .env file in the root directory and add
   laravel  api url 

```bash
  VITE_BASE_API_URL = env.example

```

Start the development server

```bash
 npm run dev
```

The app should now be running at http://localhost:5173


## 🌐 Demo 

- https://voucher-app-topaz.vercel.app/

## 📧 Contact
- Email: sisaungvipse780@gmail.com 

## Note 
If you want to know about api, you should contact me above eamil
