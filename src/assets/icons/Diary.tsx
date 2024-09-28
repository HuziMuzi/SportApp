import React from 'react';
import Svg, {Path, G, Rect} from 'react-native-svg';
import {IconProps} from 'types/types.ts';

type Props = {};

export const Diary = ({width = 28, height = 28, style, color}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      style={style}
      xmlns="http://www.w3.org/2000/svg">
      <G data-name="Layer 2" id="Layer_2">
        <Rect fill={color} height="2" rx="1" ry="1" width="4.62" x="13.69" y="6" />
        <Path
          fill={color}
          d="M26.34,31H6.53a3.1,3.1,0,0,1-3.09-3.09V4.09A3.1,3.1,0,0,1,6.53,1H26.34a3.1,3.1,0,0,1,3.09,3.09V27.91A3.1,3.1,0,0,1,26.34,31ZM6.53,3A1.09,1.09,0,0,0,5.44,4.09V27.91A1.09,1.09,0,0,0,6.53,29H26.34a1.09,1.09,0,0,0,1.09-1.09V4.09A1.09,1.09,0,0,0,26.34,3Z"
        />
        <Rect fill={color} height="2" rx="1" ry="1" width="4" x="2.56" y="5" />
        <Rect fill={color} height="2" rx="1" ry="1" width="4" x="2.56" y="15" />
        <Rect fill={color} height="2" rx="1" ry="1" width="4" x="2.56" y="25" />
        <Path
          fill={color}
          d="M29.44,19H21.93a2.49,2.49,0,0,1-2.49-2.49v-1A2.49,2.49,0,0,1,21.93,13h7.51Zm-7.51-4a.49.49,0,0,0-.49.49v1a.49.49,0,0,0,.49.49h5.51V15Z"
        />
      </G>
    </Svg>
  );
};
