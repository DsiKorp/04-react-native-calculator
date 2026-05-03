import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import React from 'react';
import { Platform, StatusBar, View } from 'react-native';

import { globalStyles } from '@/styles/global-styles';

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default RootLayout;