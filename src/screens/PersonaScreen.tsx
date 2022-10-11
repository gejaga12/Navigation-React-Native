import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ navigation, route }: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)} </Text>
    </View>
  );
};
