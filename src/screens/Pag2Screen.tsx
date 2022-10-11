import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pag2Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> PAGINA 2 </Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pag3Screen')}></Button>
    </View>
  );
};
