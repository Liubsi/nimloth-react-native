import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from '@rneui/themed';
import loadFonts from '../fonts';

// should be temporary
/* eslint-disable react/jsx-props-no-spreading */

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  textType?: 'light' | 'regular' | 'semibold' | 'bold';
};

// migrate stylesheet to own file
const styles = StyleSheet.create({
  light: {
    fontFamily: 'Raleway-Thin',
  },
  regular: {
    fontFamily: 'Raleway',
  },
  semibold: {
    fontFamily: 'Raleway-SemiBold',
  },
  bold: {
    fontFamily: 'Raleway-Bold',
  },
});

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  textType,
  ...restProps
}) => {
  const fontsLoaded = loadFonts();

  let textStyle: Record<string, unknown>;
  switch (textType) {
    case 'light':
      textStyle = styles.light;
      break;
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'semibold':
      textStyle = styles.semibold;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  // To pass custom styles from the parent component
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return fontsLoaded ? (
    <Text style={[textStyle, { ...passedStyles }]} {...restProps}>
      {children}
    </Text>
  ) : null;
};

export default CustomText;
