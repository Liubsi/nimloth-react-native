import React from 'react';
import { View } from 'react-native';
import Tabs from '@components/Tabs';
import OwnedCoinsList from '../../../../features/Home/Main/Charts/OwnedCoins';
import ExploreCoinsList from '../../../../features/Home/Main/Charts/ExploreCoins';

// TODO: Consider turning OwnedCoinsList and ExploreCoinsList into a single component

const ChartsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Tabs tabTitles={['24H', '1W', '1Y']}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
        <View style={{ flex: 1, backgroundColor: 'green' }} />
      </Tabs>
      <Tabs tabTitles={['Owned', 'Explore']}>
        <OwnedCoinsList />
        <ExploreCoinsList />
      </Tabs>
    </View>
  );
};

export default ChartsScreen;
