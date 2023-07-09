// import { View, Text } from 'react-native';
import React, { useEffect, useState, createContext, useContext } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

// Crear el contexto
export const ThemeContext = createContext();

export function ThemeContextProvider ({children}) {
    const [theme, setTheme] = useState('light'); // Valor por defecto

    // Obtener el tema guardado en el almacenamiento persistente al cargar la app
    useEffect(() => {
      getStoredTheme().then((storedTheme) => {
        if (storedTheme) {
          setTheme(storedTheme);
        }
      });
    }, []);

    // Guardar el tema seleccionado en el almacenamiento persistente
    const saveTheme = async (selectedTheme) => {
      try {
        await EncryptedStorage.setItem(
            'theme',
            JSON.stringify({
                currentTheme : selectedTheme,
            })
        );
        setTheme(selectedTheme);
      } catch (error) {
        console.log('Error al guardar el tema:', error);
      }
    };

    // Función para obtener el tema guardado en el almacenamiento persistente
    const getStoredTheme = async () => {
      try {
        const storedTheme = await EncryptedStorage.getItem('theme');
        if (storedTheme) {
            const parsedTheme = JSON.parse(storedTheme);
            const currentTheme = parsedTheme.currentTheme;
            return currentTheme;
          }
      } catch (error) {
        console.log('Error al obtener el tema:', error);
      }
    };

    const changeTheme = async () => {
        switch (theme) {
          case 'light':
            await saveTheme('dark');
            break;
          case 'dark':
            await saveTheme('light');
            break;
          default:
            await saveTheme('light');
            break;
        }
      };

    return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeContext;

export function useTheme(){
    return useContext(ThemeContext);
}
