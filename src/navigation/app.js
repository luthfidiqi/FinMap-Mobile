import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Overview from '../screen/Overview';

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen
        component={Overview}
        name="Overview"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
