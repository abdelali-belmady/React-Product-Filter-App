### README for Product List Project

---

## **React-Product-Filter-App**

This React project displays a list of products fetched from an API and allows users to search, filter by categories, and view detailed product information. It demonstrates the use of React hooks, dynamic filtering, and integration with external APIs.

---

### **Features**

1. **Fetch Products**:  
   The application fetches products from the [FakeStore API](https://fakestoreapi.com/products).  

2. **Search Functionality**:  
   Users can search for products by their title or description using a search input.

3. **Filter by Category**:  
   Products can be filtered by their categories using dynamically generated category buttons.

4. **Reset Filters**:  
   A reset button clears all filters and search inputs to display the full product list.

5. **Responsive Design**:  
   The layout is optimized for different screen sizes using Bootstrap classes.

---

### **Technologies Used**

- **React**: For building the user interface.
- **Bootstrap**: For responsive design and styling.
- **FakeStore API**: To fetch product data and categories.

---

### **Installation and Setup**

1. **Clone the Repository**:  
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies**:  
   Ensure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

3. **Start the Application**:  
   Start the development server:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

---

### **Project Structure**

```
src/
├── components/
│   ├── ProductList.js    // Main component managing products and filters
│   ├── Products.js       // Component to render individual product details
├── style.css             // Custom styles
├── App.js                // Application entry point
└── index.js              // ReactDOM rendering
```

---

### **How to Use**

1. **Search Products**:  
   Type a keyword in the search bar to filter products by title or description.

2. **Filter by Categories**:  
   Click a category button to view products within that category.

3. **Reset Filters**:  
   Click the "Reset" button to clear the search and category filters.

4. **View Product Details**:  
   Each product's information, including title, price, description, category, image, and rating, is displayed in a table format.

---

### **Future Enhancements**

- Add pagination for large product lists.
- Implement a "Sort by" feature for price, rating, etc.
- Improve product card visuals using a grid layout.
- Add unit tests using Jest or React Testing Library.

---

### **API Endpoints**

- **Products**:  
  `https://fakestoreapi.com/products`

- **Categories**:  
  `https://fakestoreapi.com/products/categories`

---

### **License**

This project is open-source and free to use. Contributions are welcome.

---
