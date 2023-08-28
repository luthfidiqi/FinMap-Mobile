import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Overview from '../screen/Overview';
import Settings from '../screen/Settings';
import Planning from '../screen/Planning';
import Transaction from '../screen/Transaction';
import UpdatePassword from '../screen/UpdatePassword';
import HelpCenter from '../screen/HelpCenter';
import About from '../screen/About';

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="App" screenOptions={{animation: 'none'}}>
      <Stack.Screen
        component={Overview}
        name="Overview"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Settings}
        name="Settings"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Planning}
        name="Planning"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Transaction}
        name="Transaction"
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
      <Stack.Screen
        component={HelpCenter}
        name="HelpCenter"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={About}
        name="About"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
