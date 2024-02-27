import React, {useState} from 'react';
import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import {Text} from 'src/shared/ui';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {ClockFill} from 'src/assets/icons/ClockFill.tsx';
import {s} from 'src/shared/lib';
import {Favourite} from 'src/assets/icons/Favourite.tsx';
import {Content} from 'src/components/ExerciseCard/Content.tsx';
import {MOCK_IMG_URI2} from 'src/shared/variables.ts';

type Props = {};

export const ExerciseCard = ({}: Props) => {
  const {colors} = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const heightContentAnim = useSharedValue(0);
  const borderBottomAnim = useSharedValue(15);

  const animatedContentStyles = useAnimatedStyle(() => {
    heightContentAnim.value = withTiming(expanded ? height : 0, {duration: 300});
    return {
      height: heightContentAnim.value,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    };
  }, [height, expanded]);

  const animatedCardStyles = useAnimatedStyle(() => {
    borderBottomAnim.value = withTiming(expanded ? 0 : 15, {duration: expanded ? 0 : 350});
    return {
      borderBottomLeftRadius: borderBottomAnim.value,
      borderBottomRightRadius: borderBottomAnim.value,
    };
  }, [expanded]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Pressable onPress={toggleExpand}>
        <Animated.View
          style={[
            {
              height: 76,
              padding: 10,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,

              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.strong_gray,
              justifyContent: 'space-between',
            },
            animatedCardStyles,
          ]}>
          <Image
            style={{width: 57, height: 46, borderRadius: 10}}
            resizeMode="cover"
            src={MOCK_IMG_URI2}
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
        <View
          style={[s.absolute]}
          onLayout={e => {
            const layoutHeight = e.nativeEvent.layout.height;
            if (layoutHeight >= 0 && height !== layoutHeight) {
              setHeight(layoutHeight);
            }
          }}>
          <Content />
        </View>
      </Animated.View>
    </View>
  );
};
