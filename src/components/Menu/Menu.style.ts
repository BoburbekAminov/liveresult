import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #bdf;
  font-family: Arial, Helvetica, sans-serif;
  height: 65px;
  .menuName {
    padding: 0 10px;
    a {
      font-family: Arial, Helvetica, sans-serif;
      background-color: transparent;
      text-decoration: none;
      font-size: 24px;
      color: #3c4a63;
    }
  }
`;
