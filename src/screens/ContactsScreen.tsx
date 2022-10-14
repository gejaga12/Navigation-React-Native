import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme';

export const ContactsScreen = () => {

  const { singIn, authState: { isLoggendIn } } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> AJUSTES </Text>
      { !isLoggendIn && <Button title="Sign In" onPress={singIn}/> }
    </View>
  );
};
