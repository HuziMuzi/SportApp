import * as React from 'react';

import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgGoogle = (props: SvgProps) => (
  <Svg
    fill="none"
    height={props.height || 24}
    viewBox="0 0 24 24"
    width={props.width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.002 12.206c0-.614-.07-1.227-.14-1.84h-8.678v3.476h4.93c-.209 1.09-.834 2.113-1.806 2.727v2.25h2.986C20.029 17.25 21 14.932 21 12.205"
      fill={props.fill || '#4285F4'}
    />
    <Path
      d="M12.181 21c2.5 0 4.583-.818 6.11-2.181l-2.985-2.25c-.833.546-1.875.886-3.125.886a5.43 5.43 0 0 1-5.138-3.749H3.988v2.318A9.19 9.19 0 0 0 12.181 21"
      fill={props.fill || '#34A853'}
    />
    <Path
      d="M7.045 13.706c-.417-1.091-.417-2.318 0-3.477V7.911H3.99c-1.32 2.523-1.32 5.522 0 8.112z"
      fill={props.fill || '#FBBC04'}
    />
    <Path
      d="M12.182 6.548a5.22 5.22 0 0 1 3.541 1.364l2.639-2.59c-1.667-1.5-3.888-2.386-6.11-2.318-3.472 0-6.666 1.908-8.193 4.976l3.055 2.318c.625-2.182 2.708-3.75 5.068-3.75"
      fill={props.fill || '#EA4335'}
    />
  </Svg>
);
export default SvgGoogle;
