import React, {useState} from 'react';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/shared/ui';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {ClockFill} from 'src/assets/icons/ClockFill.tsx';
import {s} from 'src/shared/lib';
import {Favourite} from 'src/assets/icons/Favourite.tsx';
import {Description} from 'src/components/ExerciseCard/Description.tsx';

type Props = {};

export const ExerciseCard = ({}: Props) => {
  const {colors} = useTheme();
  const [expanded, setExpanded] = useState(false);
  const animation = useSharedValue(0);
  const borderRadiusAnim = useSharedValue(15);

  const animatedContentStyles = useAnimatedStyle(() => ({
    height: animation.value,
  }));

  const animatedCardStyles = useAnimatedStyle(() => ({
    borderBottomLeftRadius: borderRadiusAnim.value,
    borderBottomRightRadius: borderRadiusAnim.value,
  }));

  const toggleExpand = () => {
    const expand = !expanded;
    setExpanded(!expanded);
    animation.value = withTiming(expand ? 550 : 0, {duration: 300});
    borderRadiusAnim.value = withTiming(expand ? 0 : 15, {duration: expand ? 100 : 400});
  };

  return (
    <View>
      <Pressable onPress={toggleExpand}>
        <Animated.View
          style={[
            {
              height: 76,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: colors.strong_gray,
            },
            animatedCardStyles,
          ]}>
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
              <ClockFill />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: colors.accent3, padding: 7, borderRadius: 100}}>
              <Favourite width={23} height={23} color={colors.main} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Pressable>
      <Animated.View
        style={[
          {
            backgroundColor: colors.strong_gray,
            overflow: 'hidden',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          animatedContentStyles,
        ]}>
        <Description />
      </Animated.View>
    </View>
  );
};
