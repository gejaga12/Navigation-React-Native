import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          borderTopColor: colores.primary,
          elevation: 0,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'CHAT':
              iconName = 'CH';
              break;
            case 'CONTACTOS':
              iconName = 'CO';
              break;
            case 'ALBUM':
              iconName = 'AL';
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="CHAT" component={ChatScreen} />
      <Tab.Screen name="CONTACTOS" component={ContactsScreen} />
      <Tab.Screen name="ALBUM" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
