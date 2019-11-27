import styled from 'styled-components';
import snowLayerOne from '../../../assets/snow-layer-1.png';
import snowLayerTwo from '../../../assets/snow-layer-2.png';
import snowLayerThree from '../../../assets/snow-layer-3.png';

const StyledSnow = styled.div`
  > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: 250%;
    pointer-events: none;
    animation: snowing linear infinite both;
    animation-iteration-count: 1;
    transform: translate3D(0, -100%, 0);
    &.layer-1 {
      background-image: url(${snowLayerOne});
      background-size: contain;
      animation-duration: 9.5s;
      & + .snow {
        animation-delay: (10s / 2);
      }
    }
    &.layer-2 {
      background-image: url(${snowLayerTwo});
      background-size: contain;
      animation-duration: 20s;

      & + .snow {
        animation-delay: (20s / 2);
      }
    }
    &.layer-2 {
      background-image: url(${snowLayerThree});
      background-size: contain;
      animation-duration: 30s;

      & + .snow {
        animation-delay: (30s / 2);
      }
    }
  }

  @keyframes snowing {
    0% {
      transform: translate3D(-6.2%, -100%, 0);
    }

    100% {
      transform: translate3D(8%, 100%, 0);
      opacity: 0;
    }
  }
`;

export default StyledSnow;
