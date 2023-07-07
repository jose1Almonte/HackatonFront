import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useCharacters } from '../../hooks/useCharacters';
import { Card } from '../../components/Card/Card';
import { textDarkModeStyles, textLightModeStyles } from '../../App';
import useColorScheme from '../../hooks/useColorScheme';

function HomeScreen() {

    const {characters} = useCharacters();
    const {colorScheme} = useColorScheme();


  return (
    <ScrollView style={colorScheme === 'dark' ? homeDarkModeStyles.backGround : homeLightModeStyles.backGround}>
    <Text style={colorScheme === 'dark' ? textDarkModeStyles.title : textLightModeStyles.title}>HomeScreen</Text>

    {characters.map((character, index) => (
        <Card character={character} key={index}/>
    ))}

    </ScrollView>

  );
}

export default HomeScreen;



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
