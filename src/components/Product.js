import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Product({ product, addToCart, handleDetail }) {
  const { id, title, img, price, inCart } = product;

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
      <div className="card ">
        <div
          className="img-container p-3 "
          onClick={() => {
            handleDetail(id);
          }}
        >
          <Link to={`/details/${id}`}>
            <img src={img} alt="product" className="card-img-top " />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart}
            onClick={e => {
              e.stopPropagation();
              addToCart(id);
            }}
          >
            {inCart ? "item is in the cart" : "  Add to cart"}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">
            <strong>{title}</strong>
          </p>
          <p className="align-self-center mb-0">
            <span className="mr-1">$</span>
            {price}
          </p>
        </div>
      </div>
    </ProductWrapper>
  );
}
const ProductWrapper = styled.div`
  .card {
    border: none;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  .card-img-top {
    transition: all 5s linear;
  }
  .img-container {
    position: relative;
    overflow: hidden;
    &:hover .cart-btn {
      background: rgb(122, 198, 184);
      color: white;
      transform: translate(0, 0);
      outline: none;
    }
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    background: transparent;
    color: transparent;
    font-size: 1.2rem;
    transform: translate(100%, 0%);
    transition: all 0.3s ease-in-out;
    outline: none;
    padding: 10px;
  }
`;
