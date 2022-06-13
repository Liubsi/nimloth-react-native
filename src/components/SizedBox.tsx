import React from 'react';
import { View } from 'react-native';

// to be used as a separator

type SizedBoxProps = {
  height?: number;
  width?: number;
};

const SizedBox: React.FC<SizedBoxProps> = ({
  height,
  width,
}: SizedBoxProps) => {
  return <View style={{ height, width }} />;
};

export default SizedBox;
