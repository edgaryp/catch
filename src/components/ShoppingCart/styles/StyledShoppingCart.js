import React from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';

const StyledCard = props => <Card {...props} />;

const StyledShoppingCart = styled(StyledCard)`
  border-radius: 1rem;
  position: absolute;
  top: 60px;
  right: 0;
  width: 350px;
  z-index: 99;
  .MuiCardHeader-root {
    background-color: ${props => props.theme.colour.orange};
    color: white;
    .MuiAvatar-root {
      width: 30px;
      height: 30px;
      border: 2px solid white;
      .MuiSvgIcon-root {
        font-size: 1.2rem;
      }
    }
    .MuiCardHeader-title {
      font-size: 1.1rem;
    }
  }
  .MuiCardMedia-root {
    min-width: 100px;
    margin-right: 1rem;
    background-size: contain;
    background-position: center 1rem;
  }
  .MuiCardContent-root {
    .name {
      margin: 1.1rem auto;
      font-weight: 100;
    }
    .MuiDivider-root {
      margin: 1rem 0;
    }
  }
`;

export default StyledShoppingCart;
