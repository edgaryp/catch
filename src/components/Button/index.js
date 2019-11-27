import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = props => {
  const { className, ...rest } = props;
  return <MuiButton className={className} {...rest} />;
};

const Button = styled(StyledButton)`
  background-color: ${props => props.theme.colour[props.colour].main};
  color: white;
  padding: 0.7rem 2rem;
  &:hover {
    background-color: ${props => props.theme.colour[props.colour].light};
  }
`;

export default Button;
