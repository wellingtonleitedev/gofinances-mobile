import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Income: React.FC = () => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path
      d="M16 2.66666C8.63621 2.66666 2.66668 8.6362 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66666 16 2.66666Z"
      stroke="#12A454"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M21.3333 16L16 10.6667L10.6667 16"
      stroke="#12A454"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16 21.3333L16 10.6667"
      stroke="#12A454"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Income;
