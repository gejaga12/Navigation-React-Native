import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View>
      <Image
        source={{
          uri: 'https://preview.redd.it/plgkf94plzj31.jpg?width=640&crop=smart&auto=webp&s=6c950c07327ef3baf5a03685fdbec7c4993827ac',
        }}
        style={{ width: 420, height: 480 }}
      />
    </View>
  );
};
