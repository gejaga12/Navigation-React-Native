import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme';

export const AlbumsScreen = () => {
  const {
    logout,
    authState: { isLoggendIn },
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ALBUMS</Text>

      {isLoggendIn && <Button title="Logout" onPress={logout} />}

      <Image
        source={{
          uri: 'https://i.pinimg.com/550x/94/d7/ef/94d7ef124e66597e7d1e58a370454d2a.jpg',
        }}
        style={{
          width: '100%',
          height: 300,
          marginVertical: 50,
          borderColor: 'black',
          borderWidth: 2,
          shadowColor: 'red',
        }}
      />
    </View>
  );
};
