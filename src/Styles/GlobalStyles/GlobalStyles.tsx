import { StyleSheet } from 'react-native';
import { hexToRGBA } from '../../helpers/convertionHelpers';

export const globalTextGenericStyles = StyleSheet.create({
    title:{
        fontSize: 15,
    },

    subTitle:{
        fontSize: 13,
    },

    description:{
        fontSize: 10,
    },
});

export const globalTextLightModeStyles = StyleSheet.create({
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

export const globalTextDarkModeStyles = StyleSheet.create({

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

export const globalButtonGenericStyles = StyleSheet.create({
    normalButton: {
    //   backgroundColor: hexToRGBA('#0000FF', 0.5),
      borderRadius: 5,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      borderWidth: 1,
    },
});

export const globalButtonLightModeStyles = StyleSheet.create({
    normalButton: {
      backgroundColor: hexToRGBA('#000000', 0.4),
      borderColor: '#000000',
    },
});

export const globalButtonDarkModeStyles = StyleSheet.create({
    normalButton: {
        backgroundColor: hexToRGBA('#FFFFFF', 0.5),
        borderColor: '#FFFFFF',
    },
});
