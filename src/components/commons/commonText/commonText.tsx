import { Text } from 'react-native';
import React from 'react';
// import { useTheme } from '@react-navigation/native';
import { useTheme } from '../../../contexts/ThemeContext';
import { globalTextDarkModeStyles, globalTextLightModeStyles, globalTextStyles } from '../../../Styles/GlobalStyles/GlobalStyles';

export function CommonTitle({text}:{text: string}) {
    const {theme} = useTheme();
  return (
      <Text style={[globalTextStyles.title, theme === 'dark' ? globalTextDarkModeStyles.title : globalTextLightModeStyles.title]}>{text}</Text>
  );
}

export function CommonSubtitle({text}:{text: string}) {
    const {theme} = useTheme();
  return (
      <Text style={[globalTextStyles.subTitle, theme === 'dark' ? globalTextDarkModeStyles.subTitle : globalTextLightModeStyles.subTitle]}>{text}</Text>
  );
}

export function CommonDescription({text}:{text: string}) {
    const {theme} = useTheme();
  return (
      <Text style={[globalTextStyles.description, theme === 'dark' ? globalTextDarkModeStyles.description : globalTextLightModeStyles.description]}>{text}</Text>
  );
}
