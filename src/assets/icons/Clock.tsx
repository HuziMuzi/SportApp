import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from 'types/types.ts';

export const Clock = ({width = 19, height = 20, style, color}: IconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 10C2 5.85786 5.35786 2.5 9.5 2.5C13.6421 2.5 17 5.85786 17 10C17 14.1421 13.6421 17.5 9.5 17.5C5.35786 17.5 2 14.1421 2 10ZM9.5 0.5C4.25329 0.5 0 4.75329 0 10C0 15.2467 4.25329 19.5 9.5 19.5C14.7467 19.5 19 15.2467 19 10C19 4.75329 14.7467 0.5 9.5 0.5ZM10.0312 7.1875C10.0312 6.63522 9.58354 6.1875 9.03125 6.1875C8.47896 6.1875 8.03125 6.63522 8.03125 7.1875V10.2187C8.03125 10.9086 8.59046 11.4688 9.28125 11.4688H13.25C13.8023 11.4688 14.25 11.0211 14.25 10.4688C14.25 9.91652 13.8023 9.4688 13.25 9.4688H10.0312V7.1875Z"
        fill={color}
        fill-opacity="0.23"
      />
    </Svg>
  );
};
