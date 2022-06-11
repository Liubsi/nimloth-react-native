import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from '@rneui/themed';
import AppLoading from 'expo-app-loading'; // deprecated, change
import loadFonts from '../fonts';

// should be temporary
/* eslint-disable react/jsx-props-no-spreading */

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'light';
};

// migrate stylesheet to own file
const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  light: {
    fontFamily: 'Poppins-Thin',
  },
});

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  textType,
  ...restProps
}) => {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let textStyle: Record<string, unknown>;
  switch (textType) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'light':
      textStyle = styles.light;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  // To pass custom styles from the parent component
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Text style={[textStyle, { ...passedStyles }]} {...restProps}>
      {children}
    </Text>
  );
};

export default CustomText;
