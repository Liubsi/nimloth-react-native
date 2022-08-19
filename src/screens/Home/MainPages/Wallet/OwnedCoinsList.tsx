import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';

type CoinProps = {
  id: string;
  coinName: string;
  dollarAmount: number;
  ownedAmount: number;
};

type CoinDataProps = {
  coins: CoinProps[];
};

const OwnedCoinsList = ({ coins }: CoinDataProps) => {
  const [ownedCoins, setOwnedCoins] = useState<CoinProps[]>(coins);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={ownedCoins}
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
                  {item.coinName} {item.dollarAmount}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OwnedCoinsList;
