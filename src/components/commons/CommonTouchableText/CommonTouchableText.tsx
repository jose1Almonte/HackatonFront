import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { globalTextDarkModeStyles, globalTextLightModeStyles, globalTextGenericStyles } from '../../../Styles/GlobalStyles/GlobalStyles';
import { useTheme } from '../../../contexts/ThemeContext';

export function CommonTouchableText({touchableStyles, onPress, text}:{touchableStyles: any, onPress: any, text: string}) {
  const {theme} = useTheme();

  return (
    <TouchableOpacity style={touchableStyles} onPress={onPress}>
      <Text style={[globalTextGenericStyles.subTitle, theme === 'dark' ? globalTextDarkModeStyles.title : globalTextLightModeStyles.title]}>{text}</Text>
    </TouchableOpacity>
  );
}
