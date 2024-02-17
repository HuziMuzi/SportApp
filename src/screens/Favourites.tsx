import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'src/components/SaveAreaView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainTitle} from 'src/ui/MainTitle.tsx';

export const FavouritesScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}}>
      <MainTitle title="Favourites" />
    </View>
  );
};
