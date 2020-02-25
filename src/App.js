import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import PageNotFound from "./components/PageNotFound";
import Modal from "./components/Modal";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/details/:id" component={Details} />
        {/* <Route path="/details" component={Details} /> */}
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
