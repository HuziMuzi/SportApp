import * as React from 'react';

import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgApple = (props: SvgProps) => (
  <Svg
    fill="none"
    height={props.height || 24}
    width={props.width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      clipRule="evenodd"
      d="M15.399 1c.2 1.1-.3 2.2-.9 3s-1.7 1.5-2.8 1.4c-.2-1.1.3-2.1.9-2.9.7-.8 1.8-1.4 2.8-1.5m3.2 17.4c.5-.8.8-1.3 1.2-2.2-3.1-1.2-3.6-5.6-.5-7.2-.9-1.2-2.2-1.8-3.5-1.8-.9 0-1.5.2-2.1.4-.5.2-.9.3-1.4.3-.6 0-1-.2-1.6-.4s-1.2-.4-1.9-.4c-1.4 0-2.9.8-3.8 2.3-1.3 2-1.1 5.9 1 9.1.9 1.2 1.9 2.5 3.2 2.5.6 0 .9-.2 1.3-.3.5-.2 1-.4 1.8-.4.9 0 1.3.2 1.8.4.4.2.7.3 1.3.3 1.4 0 2.4-1.5 3.2-2.6"
      fill={props.fill || '#fff'}
      fillRule="evenodd"
    />
  </Svg>
);
export default SvgApple;
