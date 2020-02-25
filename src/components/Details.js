import React, { useContext } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default function Details(props) {
  const { product, addToCart, toggleModal } = useContext(ProductContext);

  if (!product) return <>"loading..."</>;

  if (product) {
    const detailProduct = product.find(
      item => item.id === parseInt(props.match.params.id)
    );
    const { id, title, img, price, inCart, company, info } = detailProduct;

    return (
      <section className="py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto my-3">
              <img
                src={`../../${img}`}
                className="img-fluid img-thumbnail w-100"
                alt="product"
              />
            </div>

            <div className="col-10 mx-auto col-md-6 text-capitalize">
              <h1>model : {title}</h1>
              <h4 className=" text-uppercase text-muted mt-3 mb-2">
                made by : <span className="text-uppercase">{company}</span>
              </h4>
              <h4 className="text-blue">
                <strong>
                  price : <span>$</span>
                  {price}
                </strong>
              </h4>

              <div>
                {inCart ? (
                  <>
                    <p>this item is in your cart</p>
                    <Link to="/cart">
                      <ButtonContainer cart className="p-2">
                        go to cart
                      </ButtonContainer>
                    </Link>
                  </>
                ) : (
                  <ButtonContainer
                    cart
                    onClick={() => {
                      addToCart(id);
                      toggleModal();
                    }}
                  >
                    Add to Cart
                  </ButtonContainer>
                )}
              </div>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                some info about product :
              </p>
              <p className="text-muted lead">{info}</p>
              <Link to="/products">
                <ButtonContainer className="p-2">
                  back to products
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
