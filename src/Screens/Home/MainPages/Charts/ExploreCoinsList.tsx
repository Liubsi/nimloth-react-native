import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import CoinProps from './props';

const ExploreCoinsList = () => {
  const exploreCoinsData: CoinProps[] = [
    { id: '6', coinName: '6', dollarAmount: 1000, ownedAmount: 1 },
    { id: '5', coinName: '5', dollarAmount: 1000, ownedAmount: 1 },
    { id: '4', coinName: '4', dollarAmount: 1400, ownedAmount: 1 },
    { id: '3', coinName: '3', dollarAmount: 1400, ownedAmount: 1 },
    { id: '2', coinName: '2', dollarAmount: 1400, ownedAmount: 1 },
    { id: '1', coinName: '1', dollarAmount: 1400, ownedAmount: 1 },
  ];
  const [exploreCoins, setExploreCoins] =
    useState<CoinProps[]>(exploreCoinsData);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={exploreCoins}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item);
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
                  {item.coinName} {item.dollarAmount} {item.ownedAmount}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ExploreCoinsList;
