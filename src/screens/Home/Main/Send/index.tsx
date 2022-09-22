import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PAD_NUMBERS from '@common/constants/number-pad-constants';
import Dropdown from '@components/Dropdown';
import SearchBar from '@components/SearchBar';
import MainHeader from '@components/MainHeader';
import { MainScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { CoinProps } from '@common/types';
import { selectFriends } from '../Friends/friendsSlice';
import { SendButton, PinpadButton, PinpadContainer, MoneyText } from './styles';
import ConfirmModal from './ConfirmModal';
import { selectOwnedCoins } from '../Wallet/coinsSlice';

const SendScreen = ({
  navigation,
  route,
}: MainScreenProps<SCREEN_NAMES.SEND>) => {
  const { friendsData } = useSelector(selectFriends);
  const { ownedCoinsData } = useSelector(selectOwnedCoins);
  const [money, setMoney] = useState<string>('0');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedCoin, setSelectedCoin] = useState<CoinProps | undefined>();

  const onDropdownSelect = (item: CoinProps): void => {
    setSelectedCoin(item);
    console.log(selectedCoin);
  };

  const handleSearch = () => {
    console.log('Search');
  };

  // TODO: Add a comma separator for thousands
  const handlePress = (item: string) => {
    if (money.length > 7 && item !== '←') {
      return;
    }
    if (money === '0' && item !== '←' && item !== '.') {
      setMoney(item);
    } else {
      if (item === '.') {
        if (money.includes('.')) {
          return;
        }
      } else if (item === '←') {
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

  const handleSubmit = () => {
    if (money === '0') {
      console.log('empty value');
      return;
    }
    console.log(money);
    setModalVisible(true);
  };

  const renderPad = () => {
    return PAD_NUMBERS.map((item) => (
      <PinpadButton key={item} title={item} onPress={() => handlePress(item)} />
    ));
  };

  // TODO (optional): Replace FriendsSearchBar with SearchBar from react-native-elements?
  return (
    <>
      <MainHeader
        headerName={route.name}
        onIconPress={() => navigation.navigate(SCREEN_NAMES.SETTINGS)}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <View style={{ width: '90%' }}>
          <SearchBar
            placeholder='Search friends'
            searchData={friendsData}
            onChangeText={handleSearch}
            useModal
          />
        </View>
        <MoneyText>${money}</MoneyText>
        <View style={{ zIndex: 2, width: '90%' }}>
          <Dropdown
            defaultLabel='Select shit coin'
            data={ownedCoinsData}
            onSelect={onDropdownSelect}
          />
        </View>
        <PinpadContainer style={{ zIndex: 1 }}>{renderPad()}</PinpadContainer>
        <View style={{ width: '90%' }}>
          <SendButton title='Send' onPress={handleSubmit} />
        </View>
      </View>
      <ConfirmModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default SendScreen;
