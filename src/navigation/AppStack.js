import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import VendorRegister from '../screens/VendorRegister';
import VendorRegisterPhoto from '../screens/VendorRegisterPhoto';
import RegisterComplete from '../screens/RegisterComplete';
import ProductList from '../screens/productPages/ProductList';

const Stack = createNativeStackNavigator();
// eslint-disable-next-line prettier/prettier

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VendorRegister"
        component={VendorRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VendorRegisterPhoto"
        component={VendorRegisterPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterComplete"
        component={RegisterComplete}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
