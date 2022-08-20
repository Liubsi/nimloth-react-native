import React, { useState } from 'react';
import { View } from 'react-native';
import RingGraph from '@components/RingGraph/';
import OwnedCoinsList from '@features/Home/Main/Wallet/OwnedCoins';
import { ButtonContainer, StyledButton } from './styles';

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
    { id: '5', coinName: '5', dollarAmount: 1400, ownedAmount: 1 },
    { id: '6', coinName: '6', dollarAmount: 1400, ownedAmount: 1 },
    { id: '7', coinName: '7', dollarAmount: 1400, ownedAmount: 1 },
  ]);

  return (
    <View
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <View style={{ aspectRatio: 1, flex: 1 }}>
        <RingGraph coins={ownedCoins} />
      </View>
      <ButtonContainer>
        <StyledButton title='Withdraw' type='clear' />
        <StyledButton title='Deposit' type='solid' />
      </ButtonContainer>
      <View style={{ flex: 1, width: '100%' }}>
        <OwnedCoinsList coins={ownedCoins} />
      </View>
    </View>
  );
};

export default WalletsScreen;
