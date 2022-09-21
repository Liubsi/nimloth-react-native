import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem } from '@rneui/themed';
import MainHeader from '@components/MainHeader';
import SCREEN_NAMES from '@navigation/names';
import { MainScreenProps } from '@navigation/types';
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
        <FlatList
          style={{ flex: 1 }}
          data={historyList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log('1');
              }}
              style={{ marginBottom: 10 }}
            >
              <ListItem key={item.id}>
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      fontFamily: 'Urbanist',
                      fontSize: 14,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    {item.type} {item.coin} {item.amount} {item.time}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default TransactionHistoryScreen;
