import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCharacters } from '../../hooks/useCharacters';
import { Card } from '../../comonents/Card/Card';
import { buttonGenericStyles, textDarkModeStyles, textLightModeStyles } from '../../../App';
// import useColorScheme from '../../hooks/useColorScheme';
import { useTheme } from '../../contexts/ThemeContext';

function HomeScreen() {

    const {characters} = useCharacters();
    // const {colorScheme} = useColorScheme();
    const {theme, changeTheme} = useTheme();

  return (
    <ScrollView
    style={theme === 'dark' ? homeDarkModeStyles.backGround : homeLightModeStyles.backGround}
    contentContainerStyle={homeStyles.backGround}
    >
      <Text style={theme === 'dark' ? textDarkModeStyles.title : textLightModeStyles.title}>HomeScreen</Text>

    <TouchableOpacity style={buttonGenericStyles.normalButton} onPress={() => {changeTheme();}}>
      <Text>Current Theme: {theme}</Text>
    </TouchableOpacity>

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
