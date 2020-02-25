import React, { useContext } from "react";
import { ProductContext } from "../../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ item }) {
  const context = useContext(ProductContext);

  let { id, img, title, price, total, count } = item;
  total = total * count;

  const { removeItem, increment, decrement } = context;

  return (
    <div className="row my-1 text-capitalize text-center d-flex align-items-center">
      <div className="col-10 mx-auto col-md-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="pruduct"
        />
      </div>

      <div className=" col-10 mx-auto col-md-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>

      <div className="col-10 mx-auto col-md-2">
        <span className="d-lg-none">price: </span>
        {price}
      </div>

      <div className="col-10 mx-auto col-md-4 my-2 my-lg-0 col-lg-2">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-cart mx-1"
              onClick={() => (count > 1 ? decrement(id) : "")}
            >
              {"<"}
            </span>
            <span className="btn count mx-1">{count}</span>
            <span className="btn btn-cart mx-1" onClick={() => increment(id)}>
              {">"}
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-md-1 col-lg-2">
        <FontAwesomeIcon
          icon={faTrash}
          className="cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      <div className="col-10 mx-auto col-md-1 col-lg-2">
        <strong> $ {total}</strong>
      </div>
    </div>
  );
}
