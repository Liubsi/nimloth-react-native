import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { useFonts } from 'expo-font';

const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    // Poppins
    'Poppins-Thin': require('../assets/fonts/Poppins/Poppins-Thin.ttf'),
    Poppins: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    // Raleway
    'Raleway-Thin': require('../assets/fonts/Raleway/Raleway-Thin.ttf'),
    Raleway: require('../assets/fonts/Raleway/Raleway-Regular.ttf'),
    'Raleway-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
  });

  return fontsLoaded;
};

export const TestFontsComponent = () => {
  loadFonts();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Font Family Poppins</Text>
      <Text style={{ fontFamily: 'Poppins-Thin', fontSize: 30 }}>Nimloth</Text>
      <Text style={{ fontFamily: 'Poppins', fontSize: 30 }}>Nimloth</Text>
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30 }}>Nimloth</Text>
    </View>
  );
};

export default loadFonts;
