import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { MainStackScreenProps, RootStackScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';

const SettingsScreen = ({
  navigation,
}: RootStackScreenProps<SCREEN_NAMES.SETTINGS>) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> SETTINGS </Text>
    </View>
  );
};

export default SettingsScreen;
