import React from 'react';
import { View } from 'react-native';
import { CustomText, LoginBackground } from '../../components';

const ChartsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText style={{ color: 'black', fontSize: 20 }} textType='regular'>
        Charts
      </CustomText>
    </View>
  );
};

export default ChartsScreen;
