<div align="center">

# CRUDS

### Product Management System

A simple and responsive product management system built with pure HTML, CSS, and JavaScript.

</div>

---

## About The Project

CRUDS is a simple **Product Management System** that allows users to manage products through the main CRUD operations:

* Create products
* Read and display products
* Update existing products
* Delete products
* Delete all products
* Search products by title
* Search products by category

The project also calculates the product's total price automatically based on price, taxes, ads, and discount.

All product data is stored in the browser using **Local Storage**, so the data remains available after refreshing the page.

---

## Features

### Product Management

* Add new products.
* Add multiple copies of the same product using the count field.
* Update product information.
* Delete individual products.
* Delete all products at once.

### Price Calculation

The total price is calculated automatically using:

```text
Total = Price + Taxes + Ads - Discount
```

The total is updated while entering the price-related values.

### Search

Products can be searched using two different methods:

* Search by title.
* Search by category.

The title search is case-insensitive.

### Data Persistence

Product data is stored using:

```text
localStorage
```

This means the products remain available even after refreshing or reopening the page in the same browser.

---

## Technologies Used

<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

</div>

---

## Project Structure

```text
CRUDS/
│
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## How It Works

### 1. Create

The user enters the product information and clicks the **Create** button.

The product is converted into a JavaScript object and then added to an array.

```javascript
let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value
}
```

The array is then stored in Local Storage.

---

### 2. Read

The stored products are retrieved from Local Storage and displayed inside an HTML table.

```javascript
dataPro = JSON.parse(localStorage.getItem('product'))
```

---

### 3. Update

When the user clicks the **Update** button, the selected product data is loaded back into the form.

After editing the information, the product is updated inside the array.

```javascript
dataPro[modify] = newPro
```

---

### 4. Delete

A single product can be deleted using its index.

```javascript
dataPro.splice(i, 1)
```

The project also provides a **Delete All Products** button to remove all stored products.

---

### 5. Search

The project supports searching by title and category.

Title searching uses:

```javascript
includes()
```

and:

```javascript
toLowerCase()
```

to make the title search case-insensitive.

---

## Price Calculation

The total price follows this formula:

```text
Total = Price + Taxes + Ads - Discount
```

For example:

```text
Price    = 1000
Taxes    = 100
Ads      = 50
Discount = 100

Total = 1000 + 100 + 50 - 100
      = 1050
```

---

## Data Storage

The project uses the browser's Local Storage API to save product data.

Before saving, the JavaScript array is converted into a JSON string:

```javascript
localStorage.setItem('product', JSON.stringify(dataPro))
```

When retrieving the data, the JSON string is converted back into a JavaScript array:

```javascript
JSON.parse(localStorage.getItem('product'))
```

---

## What I Learned

Building this project helped me practice several important JavaScript concepts:

* DOM Manipulation
* Events
* Functions
* Arrays
* Objects
* Loops
* Conditional Statements
* CRUD Operations
* Local Storage
* JSON
* Array Methods
* Search and Filtering
* Dynamic HTML Rendering
* Form Data Handling

---

## Future Improvements

Some possible improvements for future versions:

* Add form validation.
* Improve the responsive design.
* Add sorting functionality.
* Add product IDs.
* Add confirmation dialogs before deleting products.
* Improve the search system.
* Separate the application logic into reusable functions.
* Add a backend and database instead of Local Storage.
* Add authentication and user accounts.

---

## Author

<div align="center">

### Ali Eldee

Frontend Developer

</div>

---

<div align="center">

If you like this project, consider giving it a ⭐ on GitHub.

</div>
