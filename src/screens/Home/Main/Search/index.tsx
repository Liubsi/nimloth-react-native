import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import SearchBar from '@components/SearchBar';
import { SearchParamList, SearchScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import MainHeader from '@components/MainHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinInfoScreen from '@features/Home/Main/Charts/CoinInfo';
import CoinProps from './props';

const SearchScreen = ({
  navigation,
  route,
}: SearchScreenProps<SCREEN_NAMES.SEARCH_COINS>) => {
  const exploreCoinsData: CoinProps[] = [
    { id: '6', coinName: '6', dollarAmount: 1000, ownedAmount: 1 },
    { id: '5', coinName: '5', dollarAmount: 1000, ownedAmount: 1 },
    { id: '4', coinName: '4', dollarAmount: 1400, ownedAmount: 1 },
    { id: '3', coinName: '3', dollarAmount: 1400, ownedAmount: 1 },
    { id: '2', coinName: '2', dollarAmount: 1400, ownedAmount: 1 },
    { id: '1', coinName: '1', dollarAmount: 1400, ownedAmount: 1 },
    { id: '0', coinName: '1', dollarAmount: 1000, ownedAmount: 1 },
    { id: '12', coinName: '2', dollarAmount: 1000, ownedAmount: 1 },
    { id: '13', coinName: '3', dollarAmount: 1400, ownedAmount: 1 },
    { id: '14', coinName: '4', dollarAmount: 1400, ownedAmount: 1 },
    { id: '15', coinName: '5', dollarAmount: 1400, ownedAmount: 1 },
    { id: '16', coinName: '6', dollarAmount: 1400, ownedAmount: 1 },
    { id: '17', coinName: '6', dollarAmount: 1000, ownedAmount: 1 },
    { id: '18', coinName: '5', dollarAmount: 1000, ownedAmount: 1 },
    { id: '19', coinName: '4', dollarAmount: 1400, ownedAmount: 1 },
    { id: '20', coinName: '3', dollarAmount: 1400, ownedAmount: 1 },
    { id: '21', coinName: '2', dollarAmount: 1400, ownedAmount: 1 },
    { id: '22', coinName: '1', dollarAmount: 1400, ownedAmount: 1 },
    { id: '23', coinName: '1', dollarAmount: 1000, ownedAmount: 1 },
    { id: '24', coinName: '2', dollarAmount: 1000, ownedAmount: 1 },
    { id: '25', coinName: '3', dollarAmount: 1400, ownedAmount: 1 },
    { id: '26', coinName: '4', dollarAmount: 1400, ownedAmount: 1 },
    { id: '27', coinName: '5', dollarAmount: 1400, ownedAmount: 1 },
    { id: '28', coinName: '6', dollarAmount: 1400, ownedAmount: 1 },
  ];

  const [exploreCoins, setExploreCoins] =
    useState<CoinProps[]>(exploreCoinsData);

  return (
    <>
      <MainHeader
        headerName={route.name === 'SearchCoins' ? 'Search' : 'ERROR'}
        onIconPress={() => navigation.navigate(SCREEN_NAMES.SETTINGS)}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <View style={{ width: '90%' }}>
          <SearchBar placeholder='Search coins' />
        </View>
        <View style={{ width: '100%', marginTop: 20 }}>
          <FlatList
            data={exploreCoins}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(SCREEN_NAMES.COIN_INFO)}
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
      </View>
    </>
  );
};

const SearchStack = createNativeStackNavigator<SearchParamList>();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen
        name={SCREEN_NAMES.SEARCH_COINS}
        component={SearchScreen}
      />
      <SearchStack.Screen
        name={SCREEN_NAMES.COIN_INFO}
        component={CoinInfoScreen}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
