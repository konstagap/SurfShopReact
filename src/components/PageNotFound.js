import React from "react";
import Title from "./Title";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Title name="Page" title="is Not Found" />
      <Link to="/">
        <ButtonContainer>back to main page</ButtonContainer>
      </Link>
    </div>
  );
}
