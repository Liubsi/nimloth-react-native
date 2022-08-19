import React from 'react';
import { View } from 'react-native';
import Tabs from '@components/Tabs';
import OwnedCoinsList from '@features/Home/Main/Charts/OwnedCoins';
import ExploreCoinsList from '@features/Home/Main/Charts/ExploreCoins';

// TODO: Consider turning OwnedCoinsList and ExploreCoinsList into a single component

const ChartsScreen = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#F3F5F6' }}
    >
      <Tabs tabTitles={['1D', '1W', '1Y', '5Y', 'ALL']} fontSize={10}>
        <View style={{ flex: 1, width: '100%', backgroundColor: 'red' }} />
        <View style={{ flex: 1, width: '100%', backgroundColor: 'blue' }} />
        <View style={{ flex: 1, width: '100%', backgroundColor: 'green' }} />
        <View style={{ flex: 1, width: '100%', backgroundColor: 'yellow' }} />
        <View style={{ flex: 1, width: '100%', backgroundColor: 'purple' }} />
      </Tabs>
      <Tabs tabTitles={['Owned', 'Explore']}>
        <OwnedCoinsList />
        <ExploreCoinsList />
      </Tabs>
    </View>
  );
};

export default ChartsScreen;
