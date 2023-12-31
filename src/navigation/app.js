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
import Profile from '../screen/Profile';
import PlanningIncome from '../screen/PlanningIncome';
import TransactionIncome from '../screen/TransactionIncome';
import AddTransaction from '../screen/AddTransaction';
import AddPlanning from '../screen/AddPlanning';

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
        component={PlanningIncome}
        name="PlanningIncome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={AddPlanning}
        name="AddPlanning"
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
        component={TransactionIncome}
        name="TransactionIncome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={AddTransaction}
        name="AddTransaction"
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
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
