import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { CustomText, LoginBackground } from '../../components';

const SettingsScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <CustomText style={{ color: 'black', fontSize: 20 }} textType='regular'>
        Settings Home
      </CustomText>
    </SafeAreaView>
  );
};

export default SettingsScreen;
