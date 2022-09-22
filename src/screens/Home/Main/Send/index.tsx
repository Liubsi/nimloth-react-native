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
  const [amount, setAmount] = useState<string>('0');
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
    if (amount.length > 7 && item !== '←') {
      return;
    }
    if (amount === '0' && item !== '←' && item !== '.') {
      setAmount(item);
    } else {
      if (item === '.') {
        if (amount.includes('.')) {
          return;
        }
      } else if (item === '←') {
        if (amount.length === 1) {
          setAmount('0');
          return;
        }
        setAmount(amount.slice(0, -1));
        return;
      }
      setAmount(amount + item);
    }
  };

  const handleSubmit = () => {
    if (amount === '0' || coin === undefined || recipient === undefined) {
      console.log('empty value');
      return;
    }
    console.log(amount, coin, recipient);
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
            value={
              recipient === undefined
                ? ''
                : `${recipient?.firstName} ${recipient?.lastName}`
            }
          />
        </View>
        <MoneyText>${amount}</MoneyText>
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
        visible={confirmModalVisible}
        setVisible={setConfirmModalVisible}
        data={{ amount, coin, recipient }}
      />
    </>
  );
};

export default SendScreen;
