import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen/MainScreen';
import SkillScreen from './src/screens/SkillScreen/SkillScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Skills" component={SkillScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
