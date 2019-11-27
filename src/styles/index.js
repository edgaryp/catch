import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import resetCSS from './resetCSS';
import baseCSS from './baseCSS';

const GlobalStyle = createGlobalStyle`
 ${resetCSS}
 ${baseCSS}
`;

export { theme, GlobalStyle };
