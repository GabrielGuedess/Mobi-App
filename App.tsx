import { useEffect, useState, useCallback } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
  Poppins_300Light as Poppins300Light,
  Poppins_500Medium as Poppins500Medium,
  Poppins_600SemiBold as Poppins600SemiBold,
} from '@expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components/native';

import { Home } from 'screens/Home';

import { theme } from 'styles/theme';

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Poppins300Light,
          Poppins500Medium,
          Poppins600SemiBold,
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Home />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
