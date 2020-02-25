import React, { useContext } from "react";
import { ProductContext } from "../../Context";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";

export default function CartTotals() {
  const { cart, clearCart } = useContext(ProductContext);

  let subtotal = cart.reduce((acc, el) => {
    return acc + el.price * el.count;
  }, 0);
  let tax = (subtotal / 100) * 10;
  let total = tax + subtotal;

  return (
    <div className="container">
      <hr />
      <div className="col-10 mt-4 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
        <Link to="/products">
          <ButtonContainer>back to shopping</ButtonContainer>
        </Link>
        <br />
        <ButtonContainer className="my-3" onClick={() => clearCart()} cart>
          Clear Cart
        </ButtonContainer>

        <h5>
          Subtotal: $<strong> {subtotal.toFixed(2)}</strong>
        </h5>
        <h5>
          Tax: $<strong> {tax.toFixed(2)}</strong>
        </h5>
        <h5>
          Total: $<strong> {total.toFixed(2)}</strong>
        </h5>

        <ButtonContainer
          className="mb-3"
          onClick={() => alert("thank you for your purchase!")}
        >
          Procced to pay
        </ButtonContainer>
      </div>
    </div>
  );
}
