import {ColorValue, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeColors} from 'src/theme/types.ts';

export function Bar({color}: {color?: ColorValue}) {
  const {top, left, right} = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: color,
        height: top,
        width: left || right || '100%',
      }}
    />
  );
}
