import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import MainHeader from '@components/MainHeader';
import SCREEN_NAMES from '@navigation/names';
import { MainScreenProps } from '@navigation/types';
import ScrollableList from '@components/ScrollableList';
import { selectHistory } from './historySlice';

type HistoryProps = {
  type: string;
  time: string;
  coin: string;
  amount: string;
  recipient?: string;
  id: string;
};

const TransactionHistoryScreen = ({
  navigation,
  route,
}: MainScreenProps<SCREEN_NAMES.HISTORY>) => {
  const { historyData } = useSelector(selectHistory);
  const [historyList, setHistoryList] = useState<HistoryProps[]>(historyData);

  return (
    <>
      <MainHeader
        headerName={route.name}
        onIconPress={() => navigation.navigate(SCREEN_NAMES.SETTINGS)}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <ScrollableList data={historyList} />
      </View>
    </>
  );
};

export default TransactionHistoryScreen;
