import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import Tabs from '@components/Tabs';
import { SizedBox } from '@components/';

const ChartsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Tabs tabTitles={['24H', '1W', '1Y']}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
        <View style={{ flex: 1, backgroundColor: 'green' }} />
      </Tabs>
      <Tabs tabTitles={['Owned', 'Explore']}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </Tabs>
    </View>
  );
};

export default ChartsScreen;
