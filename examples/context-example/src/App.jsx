import { useState } from "react";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import ProductList from "./components/ProductList";

import './App.scss';


function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="shopping-container">
          <ShoppingCart />
        </div>
        <div>
          <h1>Product List</h1>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;
