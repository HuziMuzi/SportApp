import React, {useState} from 'react';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {useTheme} from 'src/theme/hooks.ts';
import {Clock} from 'src/assets/icons/Clock.tsx';
import {ClockFill} from 'src/assets/icons/ClockFill.tsx';
import {s} from 'src/shared/lib/styles.ts';
import {Favourite} from 'src/assets/icons/Favourite.tsx';
import {Description} from 'src/components/ExerciseCard/Description.tsx';

type Props = {};

export const ExerciseCard = ({}: Props) => {
  const {colors} = useTheme();
  const [expanded, setExpanded] = useState(false);
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    height: animation.value,
  }));

  const toggleExpand = () => {
    const expand = !expanded;
    setExpanded(!expanded);
    animation.value = withTiming(expand ? 550 : 0, {duration: 300});
  };

  return (
    <View>
      <Pressable
        onPress={toggleExpand}
        style={{
          height: 76,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,

          borderBottomLeftRadius: expanded ? 0 : 15,
          borderBottomRightRadius: expanded ? 0 : 15,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.strong_gray,
        }}>
        <Image
          style={{width: 57, height: 46, borderRadius: 10}}
          resizeMode="cover"
          src={
            'https://avatars.mds.yandex.net/i?id=32d87f5e118cab354090e3d5b01d50409db0801b-10792024-images-thumbs&ref=rim&n=33&w=480&h=321'
          }
        />
        <Text m_p>Сисси - присед</Text>
        <View style={[s.flexRow, s.gp10]}>
          <TouchableOpacity
            style={{backgroundColor: colors.accent3, padding: 7, borderRadius: 100}}>
            {/*<Clock />*/}
            <ClockFill />
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: colors.accent3, padding: 7, borderRadius: 100}}>
            {/*<Clock />*/}
            <Favourite width={23} height={23} color={colors.main} />
          </TouchableOpacity>
        </View>
        {/*<Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color={'white'} />*/}
      </Pressable>
      <Animated.View
        style={[{backgroundColor: colors.strong_gray, overflow: 'hidden'}, animatedStyles]}>
        <Description />
      </Animated.View>
    </View>
  );
};
