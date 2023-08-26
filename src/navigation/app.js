import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../screen/Home';

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
