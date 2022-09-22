import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PAD_NUMBERS from '@common/constants/number-pad-constants';
import Dropdown from '@components/Dropdown';
import SearchBar from '@components/SearchBar';
import SearchModal from '@components/SearchModal';
import MainHeader from '@components/MainHeader';
import { MainScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { CoinProps, FriendProps } from '@common/types';
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
  const [searchModalVisible, setSearchModalVisible] = useState<boolean>(false);
  const [confirmModalVisible, setConfirmModalVisible] =
    useState<boolean>(false);
  const [coin, setCoin] = useState<CoinProps | undefined>();
  const [recipient, setRecipient] = useState<FriendProps | undefined>();

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
    if (money === '0' || coin === undefined || recipient === undefined) {
      console.log('empty value');
      return;
    }
    console.log(money, coin, recipient);
    setConfirmModalVisible(true);
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
            onFocus={() => setSearchModalVisible(true)}
            value={`${recipient?.firstName} ${recipient?.lastName}`}
          />
        </View>
        <MoneyText>${money}</MoneyText>
        <View style={{ zIndex: 2, width: '90%' }}>
          <Dropdown
            defaultLabel='Select shit coin'
            data={ownedCoinsData}
            onSelect={setCoin}
          />
        </View>
        <PinpadContainer style={{ zIndex: 1 }}>{renderPad()}</PinpadContainer>
        <View style={{ width: '90%' }}>
          <SendButton title='Send' onPress={handleSubmit} />
        </View>
      </View>
      <SearchModal
        placeholder='Search friends'
        onChangeText={handleSearch}
        searchData={friendsData}
        visible={searchModalVisible}
        setVisible={setSearchModalVisible}
        setSelected={setRecipient}
      />

      <ConfirmModal
        modalVisible={confirmModalVisible}
        setModalVisible={setConfirmModalVisible}
      />
    </>
  );
};

export default SendScreen;
