import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
