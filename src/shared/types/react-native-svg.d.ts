import 'react-native-svg';
import {SvgProps as ISvgProps} from 'react-native-svg';
declare module 'react-native-svg' {
  export interface SvgProps extends ISvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
    xmlSpace?: string;
  }
}
