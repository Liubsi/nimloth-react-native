import React from 'react';
import { View } from 'react-native';
import { CustomText, LoginBackground } from '../../components';

const FriendsScreen = () => {
  return (
    <View style={{flex: 1 ,justifyContent: "center", alignItems: "center"}}>
      <CustomText style={{ color: 'black', fontSize: 20 }} textType='regular'>
        Friends Home
      </CustomText>
    </View>
  );
};

export default FriendsScreen;
