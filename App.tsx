import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral/>
      {/* <StackNavigator /> */}
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
