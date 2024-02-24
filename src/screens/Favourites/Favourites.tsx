import React, {useCallback, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList, View} from 'react-native';
import {MainTitle, RadioButtons} from 'src/shared/ui';
import {FAVOURITES_TABS} from 'src/shared/lib/consts.ts';
import {SearchInput} from 'src/components/SearchInput.tsx';
import {ExerciseCard} from 'src/components/ExerciseCard/ExerciseCard.tsx';

export const FavouritesScreen = () => {
  const {top} = useSafeAreaInsets();
  const [tab, setTab] = useState(FAVOURITES_TABS[0].value);
  const onChangePage = useCallback((value: string) => setTab(value), []);

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20, gap: 20}}>
      {/*<MainTitle title="Моя коллекция" />*/}
      <RadioButtons data={FAVOURITES_TABS} value={tab} onChangeValue={onChangePage} />
      <SearchInput />
      <FlatList contentContainerStyle={{gap: 15}} data={DATA} renderItem={() => <ExerciseCard />} />
    </View>
  );
};

const DATA = [1, 2, 3, 4, 5];
