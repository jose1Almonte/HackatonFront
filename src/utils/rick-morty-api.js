import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';

export const fetchAllCharacters = () => {

    const url = 'https://rickandmortyapi.com/api/character';

    return axios.get(url);
};
