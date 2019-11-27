import { css } from 'styled-components';
import TruenoOriginal from '../fonts/trueno_original.woff2';
import TruenoLight from '../fonts/trueno_light.woff2';

const baseCSS = css`
  @font-face {
    font-family: 'Trueno';
    src: url('${TruenoOriginal}') format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Trueno';
    src: url('${TruenoLight}') format('woff2');
    font-weight: 100;
    font-style: normal;
  }
  body {
    background-color: whitesmoke;
  }
`;

export default baseCSS;
