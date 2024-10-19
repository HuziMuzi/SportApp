import React, {useRef} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainTitle} from 'src/shared/ui';
import Video, {VideoRef} from 'react-native-video';

export const DiaryScreen = () => {
  const {top} = useSafeAreaInsets();
  const videoRef = useRef<VideoRef>(null);
  const background = require('./IMG_1255.mp4');

  return (
    <View style={{flex: 1, marginTop: top, paddingHorizontal: 16, paddingTop: 20}}>
      <MainTitle title="Дневник" />
      <Video
        // Can be a URL or a local file.
        source={background}
        // Store reference
        ref={videoRef}
        rate={1.0}
        controls
        resizeMode="contain"
        // Callback when remote video is buffering
        // Callback when video cannot be loaded
        onError={e => {
          console.debug(e);
        }}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
};
