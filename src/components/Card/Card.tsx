import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { hexToRGBA } from '../../helpers/convertionHelpers';
import { useTheme } from '../../contexts/ThemeContext';
import { CommonSubtitle, CommonTitle } from '../commons/CommonText/CommonText';

export const Card = ({character}:{character: any}) => {

    const {theme} = useTheme();

    return (
    <View style={theme === 'dark' ? [cardDarkStyles.containerCard, cardStyles.containerCard] : [cardLightStyles.containerCard, cardStyles.containerCard]}>
        <View style={cardStyles.textBox}>
            <CommonTitle text={`Hello ${character.name}`}/>
            <CommonSubtitle text={`${character.id}`}/>
        </View>
        <Image style={cardStyles.imageStyles} source={{ uri: character.image }} />
    </View>
  );
};

const cardStyles = StyleSheet.create({
    imageStyles:{
        height: 'auto',
        aspectRatio: '1.1',
    },

    containerCard: {
        width: '70%',
        height: 125,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
        marginHorizontal: '1%',
        borderRadius: 5,

        overflow: 'hidden',
    },

    textBox:{
        width: '50%',
        // backgroundColor: 'red',
        // overflow: 'hidden',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
});

const cardLightStyles = StyleSheet.create({
    containerCard: {
        overflow: 'hidden',
        backgroundColor: hexToRGBA('#000000', 0.6),

    },
});

const cardDarkStyles = StyleSheet.create({
    containerCard: {
        // width: '70%',
        // height: 'auto',
        backgroundColor: hexToRGBA('#FFFFFF', 0.6),

    },
});
