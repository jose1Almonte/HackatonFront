import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { textDarkModeStyles, textLightModeStyles } from '../../App';
import useColorScheme from '../../hooks/useColorScheme';

export const Card = ({character}:{character: any}) => {

    const {colorScheme} = useColorScheme();

    return (
    <View>
        <Text style={colorScheme === 'dark' ? textDarkModeStyles.title : textLightModeStyles.title}>Hello {character.name}</Text>
        <Text style={colorScheme === 'dark' ? textDarkModeStyles.title : textLightModeStyles.title}>{character.id}</Text>
        <Image style={colorScheme === 'dark' ? cardStyles.imageStyles : cardStyles.imageStyles} source={{ uri: character.image }} />
    </View>
  );
};

const cardStyles = StyleSheet.create({
    imageStyles:{
        height: 100,
        width: 100,
    },
});

const cardLightStyles = StyleSheet.create({
    containerCard: {
        width: '90%',
        height: 'auto',
        backgroundColor: 'grey',

    },
});
