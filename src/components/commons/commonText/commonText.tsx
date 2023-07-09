import { Text } from 'react-native';
import React from 'react';
// import { useTheme } from '@react-navigation/native';
import { useTheme } from '../../../contexts/ThemeContext';
import { globalTextDarkModeStyles, globalTextLightModeStyles, globalTextGenericStyles } from '../../../Styles/GlobalStyles/GlobalStyles';

export function CommonTitle({text}:{text: string}) {
    const {theme} = useTheme();
  return (
      <Text style={[globalTextGenericStyles.title, theme === 'dark' ? globalTextDarkModeStyles.title : globalTextLightModeStyles.title]}>{text}</Text>
  );
}

export function CommonSubtitle({text}:{text: string}) {
    const {theme} = useTheme();
  return (
      <Text style={[globalTextGenericStyles.subTitle, theme === 'dark' ? globalTextDarkModeStyles.subTitle : globalTextLightModeStyles.subTitle]}>{text}</Text>
  );
}

export function CommonDescription({text}:{text: string}) {
    const {theme} = useTheme();
  return (
      <Text style={[globalTextGenericStyles.description, theme === 'dark' ? globalTextDarkModeStyles.description : globalTextLightModeStyles.description]}>{text}</Text>
  );
}
