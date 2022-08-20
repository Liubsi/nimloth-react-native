import React from 'react';
import { View } from 'react-native';
import Tabs from '@components/Tabs';
import OwnedCoinsList from '@features/Home/Main/Charts/OwnedCoins';
import ExploreCoinsList from '@features/Home/Main/Charts/ExploreCoins';
import LineChart from '@features/Home/Main/Charts/LineChart';
import { WINDOW_WIDTH } from '@common/constants/screen-constants';

type DataPoint = {
  date: string;
  value: number;
};

const originalData: DataPoint[] = [
  { date: '2000-02-01T05:00:00.000Z', value: 250 },
  { date: '2000-02-02T05:00:00.000Z', value: 300.35 },
  { date: '2000-02-03T05:00:00.000Z', value: 150.84 },
  { date: '2000-02-04T05:00:00.000Z', value: 500.92 },
  { date: '2000-02-05T05:00:00.000Z', value: 200.8 },
  { date: '2000-02-06T05:00:00.000Z', value: 150.47 },
  { date: '2000-02-07T05:00:00.000Z', value: 1000.47 },
  { date: '2000-02-08T05:00:00.000Z', value: 200.47 },
  { date: '2000-02-09T05:00:00.000Z', value: 1500.47 },
  { date: '2000-02-10T05:00:00.000Z', value: 83.8 },
  { date: '2000-02-11T05:00:00.000Z', value: 100.47 },
  { date: '2000-02-12T05:00:00.000Z', value: 1000.47 },
  { date: '2000-02-13T05:00:00.000Z', value: 200.47 },
  { date: '2000-02-14T05:00:00.000Z', value: 500.47 },
  { date: '2000-02-15T05:00:00.000Z', value: 600.47 },
  { date: '2000-02-16T05:00:00.000Z', value: 700.47 },
  { date: '2000-02-17T05:00:00.000Z', value: 800.47 },
  { date: '2000-02-18T05:00:00.000Z', value: 900.47 },
  { date: '2000-02-19T05:00:00.000Z', value: 600.47 },
  { date: '2000-02-20T05:00:00.000Z', value: 900.47 },
  { date: '2000-02-21T05:00:00.000Z', value: 1000.47 },
  { date: '2000-02-22T05:00:00.000Z', value: 900.47 },
  { date: '2000-02-23T05:00:00.000Z', value: 720.47 },
  { date: '2000-02-24T05:00:00.000Z', value: 930.47 },
  { date: '2000-02-25T05:00:00.000Z', value: 610.47 },
  { date: '2000-02-26T05:00:00.000Z', value: 490.47 },
  { date: '2000-02-27T05:00:00.000Z', value: 590.47 },
  { date: '2000-02-28T05:00:00.000Z', value: 290.47 },
  { date: '2000-02-29T05:00:00.000Z', value: 390.47 },
  { date: '2000-03-01T05:00:00.000Z', value: 690.47 },
];

const ChartsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F5F6',
      }}
    >
      <Tabs tabTitles={['1D', '1W', '1Y', '5Y', 'ALL']} fontSize={10}>
        <View style={{ flex: 1, aspectRatio: 1.5 }}>
          <LineChart lineData={originalData} bottomPadding={20} />
        </View>
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
