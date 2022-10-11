import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pag3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> PAGINA 3 </Text>

      <Button
        title="Regresar"
        onPress={() => navigation.pop()}
      />

<Button
        title="Ir a home"
        onPress={() => navigation.popToTop()}
      />

    </View>
  );
};
