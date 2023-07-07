import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useCharacters } from '../../hooks/useCharacters';
import { Card } from '../../components/Card/Card';
import { textDarkModeStyles, textLightModeStyles } from '../../App';
import useColorScheme from '../../hooks/useColorScheme';

function HomeScreen() {

    const {characters} = useCharacters();
    const {colorScheme} = useColorScheme();


  return (
    <ScrollView 
    style={colorScheme === 'dark' ? homeDarkModeStyles.backGround : homeLightModeStyles.backGround}
    contentContainerStyle={homeStyles.backGround}
    >
      <Text style={colorScheme === 'dark' ? textDarkModeStyles.title : textLightModeStyles.title}>HomeScreen</Text>

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
