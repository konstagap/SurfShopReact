import React, { useContext } from "react";
import { ProductContext } from "../../Context";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  const { cart } = useContext(ProductContext);

  if (cart.length === 0) {
    return (
      <section className="py-5">
        <div className="mx-auto my-2 text-center">
          <Title name="We have" title=" empty cart" />
          <Link to="/products">
            <ButtonContainer>back to shopping</ButtonContainer>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <Title name="Items in" title=" the cart" />;
      <CartColumns />
      <CartList cart={cart} />
      <CartTotals />
    </section>
  );
}
