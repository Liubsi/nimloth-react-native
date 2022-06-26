import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import { CustomText, LoginBackground } from '../../components';

const FriendsScreen = () => {
  const [accountBalance, setAccountBalance] = useState('0.00'); // need to fetch data from BE for this

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 50 }}>$ {accountBalance}</Text>
      <Text>Cash balance</Text>
    </SafeAreaView>
  );
};

export default FriendsScreen;
