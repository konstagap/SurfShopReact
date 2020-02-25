import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-4 text-center text-title">
        <h1 className="text-capitalize font-weight-bold title">
          {name} {title}
        </h1>
      </div>
    </div>
  );
}
