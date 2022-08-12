import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';

const FriendsScreen = () => {
  const [accountBalance, setAccountBalance] = useState('0.00'); // need to fetch data from BE for this

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50 }}>$ {accountBalance}</Text>
      <Text>Cash balance</Text>
    </View>
  );
};

export default FriendsScreen;
