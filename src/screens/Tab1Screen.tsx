import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { colores, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View>
      <Text>
        <TouchableIcon iconName="leaf-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="person-outline" />
        <TouchableIcon iconName="attach-outline" />
      </Text>
    </View>
  );
};
