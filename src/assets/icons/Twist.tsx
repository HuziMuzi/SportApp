import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from 'types/types.ts';

export const Twist = ({width = 19, height = 19, color, style}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.91634 8.7085L11.083 11.8752L7.91634 15.0418" stroke={color} strokeWidth="2" />
      <Path
        d="M7.65591 4.87139C5.98623 5.09508 4.53613 5.61465 3.57578 6.33328C2.61543 7.05191 2.21033 7.9206 2.43596 8.7775C2.66158 9.6344 3.50254 10.4211 4.80216 10.9909C6.10178 11.5608 7.77142 11.875 9.5 11.875"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M15.6704 10.0938C16.1383 9.68859 16.4419 9.24133 16.564 8.7775C16.6862 8.31367 16.6244 7.84235 16.3822 7.39046C16.1401 6.93856 15.7222 6.51495 15.1526 6.14379C14.583 5.77263 13.8728 5.4612 13.0625 5.22728"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};
