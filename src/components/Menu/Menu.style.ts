import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  background-color: #bdf;
  overflow-y: hidden;
  font-family: Arial, Helvetica, sans-serif;
  height: 65px;
  .menuName {
    padding: 0 15px;
    margin: 0 10px;
    p {
      font-family: Arial, Helvetica, sans-serif;
      background-color: transparent;
      text-decoration: none;
      font-size: 24px;
      color: #3c4a63;
      margin: 0;

      @media (max-width: 769px) {
        font-size: 17px;
      }
    }

    @media (max-width: 769px) {
      padding: 0 10px;
      margin: 0 10px;
    }
  }

  @media (max-width: 769px) {
    height: 50px;
    font-size: 17px;
  }
`;
