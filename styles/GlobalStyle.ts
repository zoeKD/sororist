import { createGlobalStyle, DefaultTheme } from "styled-components";
import { cssQueries } from "./utils";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', Helvetica, sans-serif;
    background-color: var(--background2);
    background-size: cover;
    min-height: 100vh;
    color: var(--default2);
    fill: var(--default2);
    background-image: var(--backgroundUrlLight);

    @media (prefers-color-scheme: dark) {
      background-image: var(--backgroundUrlDark);
    }
  }

  #__next {
    height: 100vh;
  }

  h1 {
    font-family: 'Abril Fatface';
    font-size: 4rem;
    line-height: 1.35;
    color: var(--default1);
    fill: var(--default1);

    @media ${cssQueries.mobile} {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 3rem;
    line-height: 1.3;
    color: var(--default1);
    fill: var(--default1);

    @media ${cssQueries.mobile} {
      font-size: 2rem;
    }
  }

  h3 {
    font-family: 'Abril Fatface';
    font-size: 2.2rem;
    color: var(--default1);
    fill: var(--default1);
    letter-spacing: .8px;
  }

  a {
    color: var(--alpha100);
    fill: var(--alpha100);

    &:hover,
    &:focus {
      color: var(--alpha120);
      fill: var(--alpha120);
    }

    @media (prefers-color-scheme: dark) {
      color: var(--alpha20);
      fill: var(--alpha20);

      &:hover,
      &:focus {
        color: var(--alpha50);
        fill: var(--alpha50);
      }
    }
  }

  /* Prevent scrolling on body when React modal is open */
  .ReactModal__Body--open {
   overflow-y: hidden;
}
`;
