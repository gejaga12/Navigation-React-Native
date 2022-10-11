import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Pag1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button 
        title='MENU'
        onPress={()=> navigation.toggleDrawer()}
        />
      )
    })
  }, []);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> PAGINA 1 </Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pag2Screen')}
      />

      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
      style={styles.botonGrande}
      onPress={() => navigation.navigate('PersonaScreen', {
        id: 1,
        nombre: 'Juan Roman Riquelme'
      })}>
        <Text style={styles.botonGrandeTexto}>persona 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{...styles.botonGrande, backgroundColor: 'orange'}}
      onPress={() => navigation.navigate('PersonaScreen', {
        id: 2,
        nombre: 'Martin Palermo'
      })}>
        <Text style={styles.botonGrandeTexto}>persona 2</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
