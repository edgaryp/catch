import React from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';

const StyledBox = props => {
  const { isProductSoldOut, ...rest } = props;
  return <Card {...rest} />;
};

const StyledProductCard = styled(StyledBox)`
  width: 100%;
  margin: 2rem 0.6rem 1rem 0.6rem;
  border: 1px solid ${props => props.theme.colour.grey.light};
  border-radius: 1rem;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  ${props => props.theme.breakpoints.up('lg')} {
    width: 23.2%;
  }
  ${props => props.theme.breakpoints.only('md')} {
    width: 22%;
  }
  ${props => props.theme.breakpoints.only('sm')} {
    width: 29%;
  }
  transition: ${props =>
    props.theme.transitions.create(['all'], {
      duration: props.theme.transitions.duration.enteringScreen
    })};
  .MuiCardMedia-root {
    height: 240px;
    background-size: contain;
    background-position: center 1rem;
  }
  .sold-out-badge {
    background: #cacaca;
    text-align: center;
    color: white;
    margin: 1.1rem 0;
  }
  .MuiCardContent-root {
    flex-grow: 2;
    position: relative;
    z-index: 1;
    > .MuiBox-root {
      height: 100%;
    }
    .name {
      margin-bottom: 2rem;
    }
    .retail-price {
      font-weight: 300;
      text-decoration: line-through;
    }
    .MuiFab-root {
      opacity: 0;
      font-size: 2.4rem;
      position: absolute;
      top: -90px;
      right: 24px;
      background: ${props => props.theme.colour.orange};
      border-radius: 100px;
      padding: 14px;
      color: white;
      cursor: pointer;
    }
    ${props =>
      !props.isProductSoldOut &&
      `
      :before {
        content: '';
        width: 200%;
        height: 59px;
        position: absolute;
        display: block;
        background-color: #ffffffc2;
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg);
        top: -39px;
        left: -10%;
        z-index: -1;
        box-shadow: -2px -12px 7px -8px rgba(0, 0, 0, 0.06);
      }
      &:hover:before {
        height: 150px;
        top: -60px;
        transition: ${props.theme.transitions.create(['all'], {
          duration: props.theme.transitions.duration.enteringScreen
        })}
      }
    `}
    &:hover \ .MuiFab-root {
      opacity: 1;
      transition: ${props =>
        props.theme.transitions.create(['all'], {
          duration: props.theme.transitions.duration.enteringScreen
        })};};
    }
  }
`;

export default StyledProductCard;
