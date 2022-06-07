import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default (App2) => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Inter-Black', fontSize: 20 }}>
        Inter Black
      </Text>
      <Text style={{ fontSize: 40 }}>Platform Default</Text>
    </View>
  );
};
