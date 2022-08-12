import { useFonts } from 'expo-font';

const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    // Poppins
    Poppins: require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Thin': require('../../assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    // Raleway
    Raleway: require('../../assets/fonts/Raleway/Raleway-Regular.ttf'),
    'Raleway-ExtraLight': require('../../assets/fonts/Raleway/Raleway-ExtraLight.ttf'),
    'Raleway-Light': require('../../assets/fonts/Raleway/Raleway-Light.ttf'),
    'Raleway-Thin': require('../../assets/fonts/Raleway/Raleway-Thin.ttf'),
    'Raleway-Medium': require('../../assets/fonts/Raleway/Raleway-Medium.ttf'),
    'Raleway-SemiBold': require('../../assets/fonts/Raleway/Raleway-SemiBold.ttf'),
    'Raleway-Bold': require('../../assets/fonts/Raleway/Raleway-Bold.ttf'),
    'Raleway-ExtraBold': require('../../assets/fonts/Raleway/Raleway-ExtraBold.ttf'),
    'Raleway-Black': require('../../assets/fonts/Raleway/Raleway-Black.ttf'),
    // Urbanist
    Urbanist: require('../../assets/fonts/Urbanist/Urbanist-Regular.ttf'),
    'Urbanist-ExtraLight': require('../../assets/fonts/Urbanist/Urbanist-ExtraLight.ttf'),
    'Urbanist-Light': require('../../assets/fonts/Urbanist/Urbanist-Light.ttf'),
    'Urbanist-Thin': require('../../assets/fonts/Urbanist/Urbanist-Thin.ttf'),
    'Urbanist-Medium': require('../../assets/fonts/Urbanist/Urbanist-Medium.ttf'),
    'Urbanist-SemiBold': require('../../assets/fonts/Urbanist/Urbanist-SemiBold.ttf'),
    'Urbanist-Bold': require('../../assets/fonts/Urbanist/Urbanist-Bold.ttf'),
    'Urbanist-ExtraBold': require('../../assets/fonts/Urbanist/Urbanist-ExtraBold.ttf'),
    'Urbanist-Black': require('../../assets/fonts/Urbanist/Urbanist-Black.ttf'),
  });

  return fontsLoaded;
};

export default loadFonts;
