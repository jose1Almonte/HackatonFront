import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export const Card = ({character}:{character: any}) => {

    console.log(character.image);

    return (
    <View>
        <Text>Hello {character.name}</Text>
        <Text>{character.id}</Text>
        <Text>{character.image}</Text>
        <Image style={cardStyles.imageStyles} source={{ uri: character.image }} />
    </View>
  );
};

const cardStyles = StyleSheet.create({
    imageStyles:{
        height: 100,
        width: 100,
    },
});
