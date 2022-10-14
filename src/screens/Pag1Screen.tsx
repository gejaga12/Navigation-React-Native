import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

export const Pag1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> PAGINA 1 </Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pag2Screen')}
      />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Juan Roman Riquelme',
            })
          }>
            <Icon name="person-circle-outline" size={30} color="black" />
          <Text style={styles.botonGrandeTexto}> PEDRO </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: 'orange' }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Martin Palermo',
            })
          }>
            <Icon name="person-circle-outline" size={30} color="black" />
          <Text style={styles.botonGrandeTexto}> MARIA </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
