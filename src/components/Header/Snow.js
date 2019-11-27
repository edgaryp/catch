import React from 'react';
import StyledSnow from './styles/StyledSnow';

const Snow = () => (
  <StyledSnow>
    <div className="layer-1"></div>
    <div className="layer-1 snow"></div>
    <div className="layer-2"></div>
    <div className="layer-2 snow"></div>
    <div className="layer-3"></div>
    <div className="layer-3 snow"></div>
  </StyledSnow>
);

export default Snow;
