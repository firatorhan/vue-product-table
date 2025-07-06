# Dynamic Table & Pagination with Vue

## About the Project

This project displays a list of products fetched page-by-page from an API in a dynamic Vue table. Users can paginate through products, sort them by price ascending or descending. The project contains both Vue 2 Option API and Vue 3 Composition API implementations.

---

## Branches

- `main`

  - Latest Vue 3 Composition API version
  - Uses Pinia for state management
  - Manages page and sorting state via URL query parameters
  - Axios for API requests
  - SCSS for styling
  - Loading and error handling included

- `vue3`

  - Experimental branch based on Vue 3 Composition API
  - Slight differences with the `main` branch

- `vue2`
  - Original Vue 2 Option API version
  - Uses Vuex for state management
  - Handles pagination and sorting
  - Axios and SCSS used
  - Includes loading indicators and error messages on page change

---

## Features

- **Page-Based Data Fetching:**  
  Fetches products page by page from API (`https://dummyjson.com/products?limit=10&skip=0`).

- **Pagination:**  
  Users can navigate pages using next/previous buttons, triggering fresh API calls per page.

- **Sorting:**  
  Products can be sorted by price in ascending or descending order.

- **State Management:**  
  Vuex (Vue 2) and Pinia (Vue 3) manage API calls and app state.

- **Styling:**  
  SCSS is used for styles.

- **Loading & Error Handling:**  
  Loading indicators show during API calls; errors display user-friendly messages.

- **URL Query Parameters:**  
  Pagination and sorting state is synced with URL query parameters (e.g., `?page=2&sort=asc`).

---

## Installation

```bash
### For Vue 3 version

# Clone the repository
git clone <repository-url>

# Enter project directory
cd <project-folder>

# Switch to main branch (Vue 3)
git checkout main

# Install dependencies
npm install

# Run the development server
npm run dev

---

### For Vue 2 version

# Clone the repository
git clone <repository-url>

# Enter project directory
cd <project-folder>

# Switch to vue2 branch
git checkout vue2

# Install dependencies
npm install

# Run the development server
npm run serve
```
