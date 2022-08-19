import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RingGraph from '@components/RingGraph/';
import OwnedCoinsList from '@features/Home/Main/Wallet/OwnedCoins';

type CoinProps = {
  id: string;
  coinName: string;
  dollarAmount: number;
  ownedAmount: number;
};

const WalletsScreen = () => {
  const [ownedCoins, setOwnedCoins] = useState<CoinProps[]>([
    { id: '1', coinName: '1', dollarAmount: 1000, ownedAmount: 1 },
    { id: '2', coinName: '2', dollarAmount: 1000, ownedAmount: 1 },
    { id: '3', coinName: '3', dollarAmount: 1400, ownedAmount: 1 },
    { id: '4', coinName: '4', dollarAmount: 1400, ownedAmount: 1 },
  ]);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#F3F5F6' }}
      edges={['top', 'left', 'right']}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>
        <RingGraph coins={ownedCoins} />
      </View>
      <OwnedCoinsList coins={ownedCoins} />
    </SafeAreaView>
  );
};

export default WalletsScreen;
