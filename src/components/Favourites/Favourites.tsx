import React, {useState} from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import {MainTitle} from 'src/ui/MainTitle.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'src/ui/Text.tsx';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'src/theme/hooks.ts';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {};

export const Favourites = ({}: Props) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useTheme();

  const [expanded, setExpanded] = useState(false);
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    height: animation.value,
  }));

  const toggleExpand = () => {
    const expand = !expanded;
    setExpanded(!expanded);
    animation.value = withTiming(expand ? 150 : 0, {duration: 300});
  };

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}}>
      <MainTitle title="Favourites" />
      <View>
        <Pressable
          onPress={toggleExpand}
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.strong_gray,
          }}>
          <Text m_p>Section</Text>
          <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color={'white'} />
        </Pressable>
        <Animated.View
          style={[{backgroundColor: colors.strong_gray, overflow: 'hidden'}, animatedStyles]}>
          <View style={{paddingHorizontal: 10, position: 'absolute'}}>
            <Text center>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};
