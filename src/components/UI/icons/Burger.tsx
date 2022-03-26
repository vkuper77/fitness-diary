import React from 'react';
import {Svg, Path} from 'react-native-svg';

const Burger = () => {
  return (
    <Svg width="18" height="12" viewBox="0 0 18 12" fill="none">
      <Path
        d="M1 1H17"
        stroke="#222222"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M5 11H17"
        stroke="#222222"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default Burger;
