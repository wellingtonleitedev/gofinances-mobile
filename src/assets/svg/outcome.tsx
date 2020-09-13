import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Outcome: React.FC = () => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path
      d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66668 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333Z"
      stroke="#E83F5B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.6667 16L16 21.3333L21.3334 16"
      stroke="#E83F5B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16 10.6667L16 21.3333"
      stroke="#E83F5B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Outcome;
