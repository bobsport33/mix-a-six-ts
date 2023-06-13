import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 62.5%;
  }

  body {
  
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 10rem;

  }
  h2 {
    font-size: 5rem;
   
  }

  h3 {
    font-size: 6rem;

  }

  h4 {
    font-size: 4rem;
  }

  p {
    font-size: 2.4rem;
  }


`;
