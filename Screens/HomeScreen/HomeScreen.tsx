import React from 'react';
import { Text } from 'react-native';
import { useCharacters } from '../../hooks/useCharacters';
import { Card } from '../../components/Card/Card';

function HomeScreen() {

    const {characters} = useCharacters();


  return (
    <>
    <Text>HomeScreen</Text>

    {characters.map((character) => (
        <Card character={character} key={character.id}/>
    ))}

    </>

  );
}

export default HomeScreen;
