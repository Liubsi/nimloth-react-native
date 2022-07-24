import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Dropdown from '../../../../components/Dropdown';
import {
  SendButton,
  PinpadButton,
  PinpadContainer,
  MoneyText,
  FriendsSearchBar,
} from './styles';

const SendScreen = () => {
  const [value, setValue] = useState<string>('0');
  const [selectedCoin, setSelectedCoin] = useState(undefined);
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

  // TODO: Add a comma separator for thousands

  const handlePress = (item: string) => {
    if (value.length > 7 && item !== '<') {
      return;
    }
    if (value === '0' && item !== '<' && item !== '.') {
      setValue(item);
    } else {
      if (item === '.') {
        if (value.includes('.')) {
          return;
        }
      } else if (item === '<') {
        if (value.length === 1) {
          setValue('0');
          return;
        }
        setValue(value.slice(0, -1));
        return;
      }
      setValue(value + item);
    }
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
    if (value === '0') {
      console.log('empty value');
      return;
    }
    console.log(value);
    setValue('0');
  };
  // TODO: Replace FriendsSearchBar with SearchBar from react-native-elements
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FriendsSearchBar onChangeText={handleSearch} />

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <MoneyText>${value}</MoneyText>
      </View>
      <Dropdown
        label='Select random shitcoin'
        data={[{ label: 'one', value: 'two', id: 'f23dfa2' }]}
        onSelect={setSelectedCoin}
      />
      <PinpadContainer>{renderPad()}</PinpadContainer>
      <SendButton title='Send' onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default SendScreen;
