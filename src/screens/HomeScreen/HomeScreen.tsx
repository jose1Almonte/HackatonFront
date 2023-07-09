import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useCharacters } from '../../hooks/useCharacters';
import { Card } from '../../components/Card/Card';
import { useTheme } from '../../contexts/ThemeContext';
import { CommonTouchableText } from '../../components/commons/CommonTouchableText/CommonTouchableText';
import { CommonTitle } from '../../components/commons/CommonTouchableText/CommonText';
import { globalButtonDarkModeStyles, globalButtonGenericStyles, globalButtonLightModeStyles } from '../../Styles/GlobalStyles/GlobalStyles';

function HomeScreen() {

    const {characters} = useCharacters();
    // const {colorScheme} = useColorScheme();
    const {theme, changeTheme} = useTheme();

  return (
    <ScrollView
    style={theme === 'dark' ? homeDarkModeStyles.backGround : homeLightModeStyles.backGround}
    contentContainerStyle={homeStyles.backGround}
    >

      <CommonTitle text="HomeScreen"/>

    <CommonTouchableText
    touchableStyles={[globalButtonGenericStyles.normalButton, theme === 'light' ? globalButtonLightModeStyles.normalButton : globalButtonDarkModeStyles.normalButton]}
    onPress={() => {changeTheme();}}
    text={`Current Theme: ${theme}`}/>

      <View style={homeStyles.cardsContainer}>

        {characters.map((character, index) => (
          <Card character={character} key={index}/>
        ))}

      </View>

    </ScrollView>

  );
}

export default HomeScreen;

const homeStyles = StyleSheet.create({

  backGround:{
    alignItems: 'center',
  },

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const homeLightModeStyles = StyleSheet.create({

  backGround:{
    backgroundColor: 'white',
  },

});

const homeDarkModeStyles = StyleSheet.create({

  backGround:{
    backgroundColor: 'black',
  },

});
