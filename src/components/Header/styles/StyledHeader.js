import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import headerBackground from '../../../assets/header-background.jpeg';

const StyledBox = props => <Box {...props} />;

const Header = styled(StyledBox)`
  background-color: red;
  padding: 0.9rem 0;
  margin-bottom: 2rem;
  position: relative;
  background: url(${headerBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  box-shadow: ${props => props.theme.shadows[4]};
  .header-logo {
    max-width: 180px;
    z-index: 10;
  }
  .MuiIconButton-root.header-shopping-cart-icon {
    z-index: 10;
    color: white;
    background-color: ${props => props.theme.colour.orange};
    .MuiSvgIcon-root {
      font-size: 2rem;
    }
    .MuiBadge-badge {
      background: ${props => props.theme.colour.grey.main};
      color: white;
    }
  }
`;

export default Header;
