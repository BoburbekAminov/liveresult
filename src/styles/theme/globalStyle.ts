import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
span{
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-width: 530px;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--bgc);
  color: var(--text-color);
}
p{
  font-family: Arial, Helvetica, sans-serif;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    margin: 0;
}

button,
input {
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
}

a {
  font-family: Arial, Helvetica, sans-serif;

  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: var(--text-color);
  }
}

._no-select {
  -webkit-touch-callout: none; //? iOS Safari
  -webkit-user-select: none; //? Safari
  -khtml-user-select: none; //? Konqueror HTML
  -moz-user-select: none; //? Old versions of Firefox
  -ms-user-select: none; //? Internet Explorer/Edge
  user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
}

button {
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: var(--prime-color);
  color: white;
  transition: 200ms;

  &:disabled {
    background-color: var(--disabled-bgc);
  }

  &.primary {
    background-color: var(--prime-color);
    color: white;
  }

  &.secondary {
    background-color: var(--light-gray);
    color: var(--placeholder-color);
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
}

input {
  padding: 12px 15px;
  background-color: var(--bgc);
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: var(--prime-color);
  }
}

@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}
`;
