import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  colour: {
    // IOdeally each colour should have atleast 'main' and 'light' for hover effect. And it can also have 'dark', 'superDark' and so on when needed
    orange: '#f58728',
    yellow: '#fad728',
    green: {
      main: '#76b042',
      light: '#9dcb44'
    },
    grey: {
      main: '#747474',
      light: '#e8e8e8'
    }
  },
  typography: {
    fontFamily: 'Trueno, Helvetica, Arial, sans-serif',
    fontWeightRegular: 100,
    body1: {
      fontSize: '1rem'
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
