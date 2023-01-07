import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import VendorRegister from '../screens/VendorRegister';
import VendorRegisterPhoto from '../screens/VendorRegisterPhoto';
import RegisterComplete from '../screens/RegisterComplete';
import ProductList from '../screens/productPages/ProductList';
import ProductGroup from '../screens/productPages/ProductGroup';
import CustomerDetail from '../screens/productPages/CustomerDetail';
import AddSubscriber from '../screens/productPages/AddSubscriber';
import DeliveryDetail from '../screens/productPages/DeliveryDetail';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
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
      <Stack.Screen
        name="ProductGroup"
        component={ProductGroup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CustomerDetail"
        component={CustomerDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddSubscriber"
        component={AddSubscriber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeliveryDetail"
        component={DeliveryDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
