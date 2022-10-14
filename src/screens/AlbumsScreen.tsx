import React from 'react';
import { View, Text, Image } from 'react-native';

export const AlbumsScreen = () => {
  return (
    <View>
         <Image
        source={{ uri: 'https://i.pinimg.com/550x/94/d7/ef/94d7ef124e66597e7d1e58a370454d2a.jpg' }}
        style={{ width: 420, height: 580 }}
      />
    </View>
  );
};
