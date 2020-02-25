import React, { useContext } from "react";
import { ProductContext } from "../Context";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default function Modal() {
  const { detailProduct, toggleModal, modal } = useContext(ProductContext);

  if (!modal) return null;
  if (!detailProduct) return null;

  return (
    <ModalContainer
      onClick={e => {
        if (e.target.id === "close") toggleModal();
      }}
    >
      <div className="container">
        <div className="row" id="close">
          <div
            id="modal"
            className="rounded col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3"
          >
            <h4>Thank you, item added!</h4>
            <img
              src={`../../${detailProduct.img}`}
              className="img-fluid"
              alt=""
            />
            <h5 className="py-3">
              <strong>Price ${detailProduct.price} </strong>
            </h5>
            <Link to="/products">
              <ButtonContainer
                onClick={() => {
                  toggleModal();
                }}
              >
                Continue Shopping
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer
                cart
                onClick={() => {
                  toggleModal();
                }}
              >
                Go To Cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
 width:40%
 height:auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #fff;
  }
  .img {
    height: 50%;
    width: auto;
  }
`;
