import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
// TODO: fix this custom path import
// eslint-disable-next-line import/no-unresolved
import Dropdown from '@components/Dropdown';
import {
  SendButton,
  PinpadButton,
  PinpadContainer,
  MoneyText,
  FriendsSearchBar,
} from './styles';

const SendScreen = () => {
  const [money, setMoney] = useState<string>('0');
  const [dropdownData, setDropdownData] = useState<
    {
      label: string;
      value: string;
      id: string;
    }[]
  >([{ label: '', value: '', id: '' }]);
  const [selectedCoin, setSelectedCoin] = useState<{
    label: string;
    value: string;
    id: string;
  }>({ label: '', value: '', id: '' });

  const padLayout = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '0',
    '<',
  ];
  const availableCoins = [
    { label: 'one', value: 'two', id: 'f23dfa2' },
    { label: 'three', value: 'four', id: 'h2fd6a2' },
    { label: 'five', value: 'six', id: 'b23dka9' },
  ];

  // TODO: Change to monitor realtime data
  useEffect(() => {
    setDropdownData(availableCoins);
  }, []);

  // TODO: Add a comma separator for thousands
  const handlePress = (item: string) => {
    if (money.length > 7 && item !== '<') {
      return;
    }
    if (money === '0' && item !== '<' && item !== '.') {
      setMoney(item);
    } else {
      if (item === '.') {
        if (money.includes('.')) {
          return;
        }
      } else if (item === '<') {
        if (money.length === 1) {
          setMoney('0');
          return;
        }
        setMoney(money.slice(0, -1));
        return;
      }
      setMoney(money + item);
    }
  };

  // TODO: Make sure to send selection to BE

  const onDropdownSelect = (item: {
    label: string;
    value: string;
    id: string;
  }): void => {
    setSelectedCoin(item);
    console.log(selectedCoin); // prints the previous selected coin
  };

  // TODO: Implement search for friends

  const handleSearch = () => {
    console.log('search');
  };

  const renderPad = () => {
    return padLayout.map((item) => (
      <PinpadButton key={item} title={item} onPress={() => handlePress(item)} />
    ));
  };

  const handleSubmit = () => {
    if (money === '0') {
      console.log('empty value');
      return;
    }
    console.log(money);
    setMoney('0');
  };
  // TODO (optional): Replace FriendsSearchBar with SearchBar from react-native-elements?
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F3F5F6',
        marginTop: 60,
      }}
    >
      <FriendsSearchBar onChangeText={handleSearch} />

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <MoneyText>${money}</MoneyText>
      </View>
      <View style={{ zIndex: 2 }}>
        <Dropdown
          defaultLabel='Select shit coin'
          data={dropdownData}
          onSelect={onDropdownSelect}
        />
      </View>
      <PinpadContainer style={{ zIndex: 1 }}>{renderPad()}</PinpadContainer>
      <SendButton title='Send' onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default SendScreen;
