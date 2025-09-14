import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BatSignalScreen from './src/screens/BatSignalScreen/BatSignalScreen';
import BatFormScreen from './src/screens/BatFormScreen/BatFormScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  BatSignal: undefined;
  BatForm: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BatSignal">
        <Stack.Screen
          name="BatSignal"
          component={BatSignalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BatForm" component={BatFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}