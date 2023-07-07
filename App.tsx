import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

export const textLightModeStyles = StyleSheet.create({
  title: {
    color: 'black',
  },

  subTitle: {
    color: 'black',
  },

  description: {
    color: 'black',
  },
});

export const textDarkModeStyles = StyleSheet.create({

  title: {
    color: 'white',
  },

  subTitle: {
    color: 'white',
  },

  description: {
    color: 'white',
  },
});
