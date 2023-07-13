import React from 'react';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider, extendTheme} from 'native-base';

export default function Layout() {
  const theme = extendTheme({
    colors: {
      primary: {
        background: '#fafafan',
        text: '#1a1a1a',
        card: '#ffffff',
      },
      icon: {
        default: '#9b9b9b',
      },
    },
  });
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <Stack>
          <Stack.Screen name="index" options={{headerShown: false}} />
        </Stack>
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
