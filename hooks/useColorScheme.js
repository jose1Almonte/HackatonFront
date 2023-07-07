// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import {Appearance, ColorSchemeName} from 'react-native';

export default function useColorScheme() {
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

    useEffect(() => {
        const handleAppearanceChange = (newColorScheme) => {
          setColorScheme(newColorScheme.colorScheme);
        };

        const subscription = Appearance.addChangeListener(handleAppearanceChange);

        return () => subscription?.remove();

      }, []);

      // useEffect(() => {
      //   console.log('colorScheme: ', colorScheme);
      // }, [colorScheme]);

  return {colorScheme};
}
