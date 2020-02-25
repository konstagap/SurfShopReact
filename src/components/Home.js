import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "./Title";
import { ButtonContainer } from "./Button";

export default function Home() {
  return (
    <Hero>
      <div className="over">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <Title name="Welcome to" title="our shop" />
          <Link to="/products">
            <ButtonContainer>Check out Inventory</ButtonContainer>
          </Link>
        </div>
      </div>
    </Hero>
  );
}

const Hero = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  min-height: 100%;
  height: 100vh;
  background: url(https://images.pexels.com/photos/7862/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  background-repeat: none;
  background-size: cover;
  .over {
    position: fixed;
    z-index: 4;
    width: 100%;
    height: 100%;
    // background-color: rgba(126, 125, 124, 0.178);
    background-image: linear-gradient(19deg, #faaca83a 20%, #ddd6f32d 80%);
  }
`;
