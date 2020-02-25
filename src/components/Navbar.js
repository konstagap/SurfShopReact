import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <FontAwesomeIcon icon={faShoppingCart} /> My cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 2px 4px 100px 10px rgb(100, 170, 184);
  background: rgb(122, 198, 184);
  .nav-link {
    color: var(--mainDark) !important;
    text-transform: capitalize;
    font-size: 1.2rem;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
`;
