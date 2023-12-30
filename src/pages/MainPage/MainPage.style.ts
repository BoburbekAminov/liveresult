import styled from "styled-components";

export const StyledMainPage = styled.div`
  padding: 0 0.75rem;
  padding-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;

  .listTitle {
    background-color: #f8f8f8;
    height: 50px;
    margin: 0-12px 16px;

    h1 {
      padding: 15px 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.9375rem;
      text-transform: uppercase;
      font-weight: bold;
      margin: 0;
    }
  }
  .recommendations {
    display: flex;
    align-items: center;
    font-weight: 700;

    .tabCurrent {
      background-color: #bdf;
      color: #3c4a63;
      padding: 8px;
      p {
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    .tabFootbal {
      background-color: #bdf;
      color: #3c4a63;
      padding: 8px;
      p {
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
`;
