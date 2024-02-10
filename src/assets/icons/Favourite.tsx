import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from 'types/types.ts';

export const Favourite = ({width = 32, height = 31, style, color}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 31"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.24875 17.9649L15.3153 26.4819C15.6397 26.7867 15.8019 26.9391 16 26.9391C16.198 26.9391 16.3602 26.7867 16.6846 26.4819L25.7512 17.9649C28.2779 15.5913 28.5847 11.6853 26.4596 8.94625L26.06 8.43123C23.5178 5.15458 18.4149 5.7041 16.6286 9.44688C16.3762 9.97557 15.6237 9.97557 15.3713 9.44688C13.585 5.7041 8.4821 5.15458 5.93987 8.43123L5.54029 8.94625C3.41518 11.6853 3.72202 15.5913 6.24875 17.9649Z"
        fill={color}
        stroke={color}
        stroke-width="2"
      />
    </Svg>
  );
};
