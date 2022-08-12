import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import Tabs from '@components/Tabs';
import { SizedBox } from '@components/';

const ChartsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <SizedBox height={300} />
      <Text style={{ textAlign: 'center' }}>Charts</Text>
      <Tabs tabTitles={['Owned', 'Explore']}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </Tabs>
    </SafeAreaView>
  );
};

export default ChartsScreen;
