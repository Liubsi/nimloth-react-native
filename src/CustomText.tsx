import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextStyle } from 'react-native';
import { Text } from 'react-native-elements';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

/* eslint @typescript-eslint/no-var-requires: "off" */

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'light';
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  light: {
    fontFamily: 'Poppins-Light',
  },
});

const CustomText: React.FC<CustomTextProps> = ({
  children,
  textType,
  style,
}) => {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //   Font.loadAsync({
  //     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf")
  //   })
  //   .then(() => {
  //     setFontLoaded(true);
  //   })
  // });

  // if (!fontLoaded) {
  //   console.log("not loaded")
  //   return <AppLoading/>
  // }

  // let textStyle: Record<string, unknown>
  // switch (textType) {
  //   case "regular":
  //     textStyle = styles.regular;
  //     break;
  //   case "bold":
  //     textStyle = styles.bold;
  //     break;
  //   case "light":
  //     textStyle = styles.light;
  //     break;
  //   default:
  //     textStyle = styles.regular;
  //     break;
  // }

  // // To pass custom styles from the parent component
  // const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;

  // return (
  //   <Text style={[textStyle, { ...passedStyles} ]}>
  //     {children}
  //   </Text>
  // );

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Inter-Black', fontSize: 40 }}>
        Inter Black
      </Text>
      <Text style={{ fontSize: 40 }}>Platform Default</Text>
    </View>
  );
};

export default CustomText;
