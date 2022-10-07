/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import { TouchableOpacity, Modal, View } from 'react-native';
import { InputProps } from '@rneui/themed';
import { BackIcon } from '@components/MainHeader/styles';
import ScrollableList from '@components/ScrollableList';
import {
  DatumProps,
  HistoryProps,
  FriendProps,
  CoinProps,
} from '@common/types';
import SearchBar, { SearchBarProps } from '@components/SearchBar';

type SearchModalProps = InputProps &
  SearchBarProps & {
    searchData: DatumProps[];
  };

type ModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<FriendProps | undefined>>;
};

type Props = SearchModalProps & ModalProps;

const SearchModal = ({
  placeholder,
  onChangeText,
  searchData,
  visible,
  setVisible,
  setSelected,
}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='fullScreen'
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#F2F2F2',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ height: '8%' }} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginBottom: '5%',
            }}
          >
            <TouchableOpacity onPress={() => setVisible(false)}>
              <BackIcon />
            </TouchableOpacity>
            <View style={{ width: '90%' }}>
              <SearchBar
                placeholder={placeholder}
                onChangeText={onChangeText}
              />
            </View>
          </View>
          <ScrollableList
            data={searchData}
            setSelected={setSelected}
            onSelectItem={() => setVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
