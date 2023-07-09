import React, {useState, useEffect} from 'react'
import { fetchAllCharacters } from '../utils/rick-morty-api';

export function useCharacters() {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const response = await fetchAllCharacters();
        // console.log('response',response.data.results);
        setCharacters(response.data.results);
    };

    useEffect(() => {
        getCharacters();
    },[]);

  return {characters, setCharacters};
}
