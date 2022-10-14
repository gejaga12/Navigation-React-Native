import React from 'react';
import { View, Text, Image } from 'react-native';

export const ChatScreen = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/68/da/20/68da201d30e8b1f2ff79e35bfa6beedd.jpg',
        }}
        style={{ width: 420, height: 540 }}
      />
    </View>
  );
};
