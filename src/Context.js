import React, { createContext, useState, useEffect } from "react";

import { storeProducts } from "./data";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState();
  const [detailProduct, setDetailProduct] = useState();
  const [cart, setCart] = useState([]);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    // adding to localstorage
    if (localStorage.getItem("product")) {
      setProduct(JSON.parse(localStorage.getItem("product")));
    } else {
      const copyStoreProducts = [];
      storeProducts.forEach(item => copyStoreProducts.push(item));
      setProduct(copyStoreProducts);
      localStorage.setItem("product", JSON.stringify([copyStoreProducts]));
    }
    // adding to localstorage
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  // Open modal
  const toggleModal = () => {
    setModal(!modal);
  };
  // Open details page
  const handleDetail = id => {
    let item = product.find(item => item.id === id);
    setDetailProduct(item);
  };

  // Cart manipulations
  const addToCart = id => {
    let item = product.find(item => item.id === id);
    const index = product.indexOf(item);
    product[index].inCart = true;
    product[index].count = 1;
    product[index].total = product[index].price;
    setProduct([...product]);
    setCart([...cart, product[index]]);
    // adding to localstorage
    localStorage.setItem("cart", JSON.stringify([...cart, product[index]]));
    localStorage.setItem("product", JSON.stringify([...product]));
  };
  const increment = id => {
    let item = cart.find(item => item.id === id);
    const index = cart.indexOf(item);
    cart[index].count += 1;
    setCart([...cart]);
    // adding to localstorage
    localStorage.setItem("cart", JSON.stringify([...cart]));
  };
  const decrement = id => {
    let item = cart.find(item => item.id === id);
    const index = cart.indexOf(item);
    cart[index].count -= 1;
    setCart([...cart]);
    // adding to localstorage
    localStorage.setItem("cart", JSON.stringify([...cart]));
  };
  const removeItem = id => {
    let cartFiltered = cart.filter(item => item.id !== id);
    setCart(cartFiltered);
    let item = product.find(item => item.id === id);
    const index = product.indexOf(item);
    product[index].inCart = false;
    product[index].count = 0;
    product[index].total = 0;
    setProduct([...product]);
    // adding to localstorage
    localStorage.setItem("cart", JSON.stringify(cartFiltered));
    localStorage.setItem("product", JSON.stringify([...product]));
  };

  const clearCart = () => {
    setProduct(p => {
      let reset = p.map(el => {
        let elCopy = { ...el };
        elCopy.inCart = false;
        elCopy.total = 0;
        elCopy.count = 0;
        return elCopy;
      });
      // adding to localstorage
      localStorage.setItem("product", JSON.stringify(reset));
      return reset;
    });
    setCart([]);
    // adding to localstorage
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        detailProduct,
        cart,
        increment,
        decrement,
        removeItem,
        clearCart,
        modal,
        toggleModal,
        addToCart,
        handleDetail
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
