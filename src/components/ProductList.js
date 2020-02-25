import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "../Context";

export default function ProductList() {
  const { addToCart, handleDetail, product } = useContext(ProductContext);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="boards" />
          <div className="row">
            {product &&
              product.map(item => {
                return (
                  <Product
                    key={item.id}
                    product={item}
                    addToCart={addToCart}
                    handleDetail={handleDetail}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
