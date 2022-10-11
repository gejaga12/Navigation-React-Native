import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" options={{title: 'HOME'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'AJUSTES'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
