import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainTitle, RadioButtons, Text} from 'src/shared/ui';
import {GENDER_DATA, PROFILE_TABS} from 'src/shared/lib/consts.ts';
import {useTheme} from 'src/shared/lib/theme/hooks.ts';
import {Settings} from 'src/components/Settings/Settings.tsx';
import {Diary} from 'src/components/Diary/Diary.tsx';
import {Profile} from 'src/components/Profile/Profile.tsx';

const SECTIONS = {
  profile: <Profile />,
  settings: <Settings />,
};

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const {colors} = useTheme();
  const [activeSection, setActiveSection] = useState(PROFILE_TABS[0].value);

  const onChangeActiveSection = useCallback((section: string) => setActiveSection(section), []);

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20, gap: 20}}>
      <MainTitle title="Настройки" />
      <RadioButtons
        data={PROFILE_TABS}
        value={activeSection}
        onChangeValue={onChangeActiveSection}
      />
      {SECTIONS[activeSection]}
    </View>
  );
};
