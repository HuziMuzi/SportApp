import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'src/ui/Text.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'src/theme/hooks.ts';
import {s} from 'src/shared/lib/styles.ts';

export const HeaderImage = () => {
  const {top} = useSafeAreaInsets();
  const height = 130 + top;
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {height}]}>
      <Image style={styles.image} source={require('../../assets/images/headerImage.png')} />
      <View style={[styles.descriptionContainer, {backgroundColor: colors.dimmed}]}>
        <Text m_p style={s.z1} color="text">
          "Спорт — дорога к укреплению не только тела, но и духа. В каждой тренировке — мощная
          инвестиция в своё будущее и здоровье."
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    width: '100%',
    overflow: 'hidden',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    position: 'absolute',
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
  },
});
