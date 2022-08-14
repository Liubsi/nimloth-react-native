import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import RingGraph from '@components/RingGraph/';

const WalletsScreen = () => {
  const [accountBalance, setAccountBalance] = useState('0.00'); // need to fetch data from BE for this

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RingGraph
        coins={[
          { coinName: '1', dollarAmount: 1000 },
          { coinName: '2', dollarAmount: 1000 },
          { coinName: '3', dollarAmount: 1400 },
        ]}
      />
    </View>
  );
};

export default WalletsScreen;
