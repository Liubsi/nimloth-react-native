import React from 'react';
import { TextStyle } from 'react-native';
import { Text } from '@rneui/themed';
import { loadFonts, setTextStyle } from '../fonts';

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  textType?: 'light' | 'regular' | 'semibold' | 'bold';
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  textType,
}) => {
  const fontsLoaded = loadFonts();
  const textStyle = setTextStyle(textType);

  // To pass custom styles from the parent component
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return fontsLoaded ? (
    <Text style={[textStyle, { ...passedStyles }]}>{children}</Text>
  ) : null;
};

export default CustomText;
