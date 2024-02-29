import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainTitle, Text} from 'src/shared/ui';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {s} from 'src/shared/lib';
import {Twist} from 'src/assets/icons/Twist.tsx';
import Markdown from 'react-native-markdown-display';

export const DiaryScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20, gap: 20}}>
      <MainTitle title="Дневник" />
      <View style={[s.flexRow, s.alignCenter]}>
        <View
          style={[
            {
              backgroundColor: colors.accent3,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: colors.gray,
              paddingVertical: 9,
              paddingHorizontal: 8,
            },
            s.flex1,
          ]}>
          <Image source={require('../assets/images/maleBody.png')} />
          <TouchableOpacity
            style={{
              padding: 3,
              position: 'absolute',
              bottom: 5,
              left: 5,
              borderRadius: 27 / 2,
              backgroundColor: colors.accent3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Twist color={colors.placeholder} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: colors.accent3,
          }}
        />
        <View style={[s.flex1]}>
          <View
            style={{
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: colors.gray,
              borderRadius: 7,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text m_p color="placeholder">
              Грудь
            </Text>
            <Text m_p>81 см</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
