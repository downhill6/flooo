import React from 'react';
import {Stack} from 'expo-router';
import {NativeBaseProvider, extendTheme} from 'native-base';

export default function Layout() {
  const theme = extendTheme({
    colors: {
      custom: {
        background: '#fafafa',
        text: '#1a1a1a',
        white: '#ffffff',
        gray: '#9d9c9d',
        green: '#30cf79',
        ligthGreen: '#a8e1be',
      },
      icon: {
        default: '#9b9b9b',
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
      </Stack>
    </NativeBaseProvider>
  );
}
