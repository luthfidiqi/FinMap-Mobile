import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Onboarding from '../screen/Onboarding';
import Login from '../screen/Login';
import Register from '../screen/Register';
import ForgotPassword from '../screen/ForgotPassword';
import UpdatePassword from '../screen/UpdatePassword';

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{animation: 'none'}}>
      <Stack.Screen
        component={Onboarding}
        name="Onboarding"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ForgotPassword}
        name="ForgotPassword"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={UpdatePassword}
        name="UpdatePassword"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
