import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { StyleSheet } from 'react-native';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { hexToRGBA } from './helpers/convertionHelpers';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
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

export const buttonGenericStyles = StyleSheet.create({
  normalButton: {
    backgroundColor: hexToRGBA('#0000FF', 0.5),
    borderRadius: 5,
  },
});
