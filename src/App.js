import React from 'react';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import { useAsyncFetch } from './services/api';
import { setProducts } from './store/reducers/products/actions';
import ProgressBar from './components/ProgressBar';
import Products from './components/Products';
import Header from './components/Header';
import PageTitle from './components/PageTitle';

const App = () => {
  const [result, loading] = useAsyncFetch(
    '/challenge-3/response.json?callback=catch'
  );
  useDispatch()(setProducts(result));
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Container maxWidth="lg">
            {loading ? (
              <ProgressBar />
            ) : loading === null ? (
              <h1>no products found</h1>
            ) : (
              <>
                <PageTitle />
                <Products />
              </>
            )}
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
