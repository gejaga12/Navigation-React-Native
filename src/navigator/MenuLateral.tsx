import * as React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../themes/appTheme';
import { Tabs } from './Tabs';
import { TopTabNavigator } from './TopTabNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{
      headerShown: false
    }}
    drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="TopTabNavigator" component={TopTabNavigator} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* FOTO DEL AVATAR */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.mundodeportivo.com/files/og_thumbnail/uploads/2018/10/24/60e7ed59bd621.jpeg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* OPCIONES DEL MENU */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{ ...styles.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={25} color="grey" />
          <Text style={styles.menuTexto}> Navegacion </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={25} color="grey" />
          <Text style={styles.menuTexto}> Ajustes </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('TopTabNavigator')}>
          <Icon name="cog-outline" size={25} color="grey" />
          <Text style={styles.menuTexto}> Menu </Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
};
