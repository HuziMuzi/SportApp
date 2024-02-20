import React from 'react';
import {
  Button,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {useTypedNavigation} from 'src/shared/lib/hooks/useTypeNavigation.ts';
import {HeaderImage} from 'src/components/Main/HeaderImage.tsx';
import {s} from 'src/shared/lib/styles.ts';
import {SearchInput} from 'src/components/Main/SearchInput.tsx';
import {MainTitle} from 'src/ui/MainTitle.tsx';
import {useTheme} from 'src/theme/hooks.ts';
import {MuscleGroups} from 'src/components/MuscleGroups/MuscleGroups.tsx';
import Animated, {useSharedValue} from 'react-native-reanimated';

export const Main = () => {
  // const height = useSharedValue(130);
  const {navigate} = useTypedNavigation();
  // const {colors} = useTheme();

  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
        // console.log(e.nativeEvent.contentOffset);
        // const y_offset = e.nativeEvent.contentOffset.y;
        // if (y_offset <= 130) {
        //   height.value = height.value - y_offset;
        // }
      }}>
      {/*<Animated.View style={{width: '100%', height, backgroundColor: 'red'}} />*/}
      <HeaderImage />
      <View style={[s.px16, s.rgp20]}>
        <MainTitle title="Главная" />
        <Text m_p>Выберите группу мышц</Text>
        <SearchInput />
        <MuscleGroups />
        <Button title={'go back'} onPress={() => navigate('greeting')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    gap: 10,
  },
});
