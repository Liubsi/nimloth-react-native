import React from 'react';
import { View } from 'react-native';
import { CustomText, LoginBackground } from '../../components';
import NavigationBar from './navigationBar';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText style={{ color: 'black', fontSize: 20 }} textType='regular'>
        Nimloth Home
      </CustomText>
      {/* <NavigationBar/> */}
    </View>
  );
};

export default HomeScreen;
