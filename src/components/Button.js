import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  color: white;
  font-size: 1.2em;
  padding: 2px 15px;
  // background: rgb(122, 198, 184);
  border: none;
  background: ${props =>
    props.cart ? "rgb(229, 133, 133)" : "rgb(122, 198, 184)"};
  outline: none;
  transition: 0.2s linear;
  &:hover {
    border: none;
    background: #fefefe;
    color: ${props =>
      props.cart ? "rgb(229, 133, 133)" : "rgb(122, 198, 184)"};
  }
`;
