import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import RingGraph from '@components/RingGraph/';
import OwnedCoinsList from '@features/Home/Main/Wallet/OwnedCoins';
import MainHeader from '@components/MainHeader';
import SCREEN_NAMES from '@navigation/names';
import { MainScreenProps } from '@navigation/types';
import { ButtonContainer, StyledButton } from './styles';
import { selectOwnedCoins } from './coinsSlice';

type CoinProps = {
  id: string;
  coinName: string;
  dollarAmount: number;
  ownedAmount: number;
};

const WalletsScreen = ({
  navigation,
  route,
}: MainScreenProps<SCREEN_NAMES.WALLET>) => {
  const { ownedCoinsData } = useSelector(selectOwnedCoins);
  const [ownedCoins, setOwnedCoins] = useState<CoinProps[]>(ownedCoinsData);

  return (
    <>
      <MainHeader
        headerName={route.name}
        onIconPress={() => navigation.navigate(SCREEN_NAMES.WALLET)}
      />
      <View style={{ flex: 1, alignItems: 'center' }}>
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
    </>
  );
};

export default WalletsScreen;
