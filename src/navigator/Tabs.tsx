import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/appTheme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS == 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    
    <BottonTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle= {{
      backgroundColor: colores.primary
    }}
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: colores.primary,
      tabBarStyle: {
        borderTopColor: colores.primary,
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarIcon: ({ color, focused }) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'chatbubbles-outline';
            break;
          case 'Tab2Screen':
            iconName = 'aperture-outline';
            break;
          case 'StackNavigator':
            iconName = 'person-outline';
            break;
        }
        return <Icon name={ iconName } size={ 20 } color={ color }/>
      },
    })}
    >
      <BottonTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'HOME',
        }}
        component={ Tab1Screen }
      />
      <BottonTabAndroid.Screen
        name="Tab2Screen"
        options={{ title: 'MENU' }}
        component={ TopTabNavigator }
      />
      <BottonTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'STACK' }}
        component={ StackNavigator }
      />
    </BottonTabAndroid.Navigator>
  );
};

const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>

      {/* tabBarIcon: props => <Text style={{ color: props.color }}>T1</Text>, */}

      <BottonTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'TAB 1',
        }}
        component={Tab1Screen}
      />
      <BottonTabIOS.Screen
        name="Tab2Screen"
        options={{ title: 'TAB 2' }}
        component={TopTabNavigator}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'STACK' }}
        component={StackNavigator}
      />
    </BottonTabIOS.Navigator>
  );
};
