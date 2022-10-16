import { css } from "@emotion/react";
import background from '../../assets/imgs/background.jpg';

export const styleGlobal = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
  }

  body {
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;