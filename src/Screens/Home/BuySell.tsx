import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { CustomText, LoginBackground } from '../../components';

const BuySellScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText style={{ color: 'black', fontSize: 20 }} textType='regular'>
        Buy Sell
      </CustomText>
      <Text>Send</Text>
    </View>
  );
};

export default BuySellScreen;
