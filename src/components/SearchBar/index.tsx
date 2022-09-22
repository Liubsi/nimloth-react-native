/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, Modal, View } from 'react-native';
import { InputProps } from '@rneui/themed';
import { BackIcon } from '@components/MainHeader/styles';
import ScrollableList from '@components/ScrollableList';
import { DatumProps } from '@common/types';
import { XIcon, StyledInput } from './styles';

type SearchBarProps = InputProps & {
  placeholder: string;
  onChangeText: (value: string) => void;
  searchData: DatumProps[];
  // eslint-disable-next-line react/no-unused-prop-types
  useModal?: boolean;
};

type ModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<DatumProps | undefined>>;
};

type Props = SearchBarProps & ModalProps;

const ClearButton = ({ clear }: { clear: () => void }) => {
  return (
    <TouchableOpacity onPress={clear}>
      <XIcon />
    </TouchableOpacity>
  );
};

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
            }}
          >
            <TouchableOpacity onPress={() => setVisible(false)}>
              <BackIcon />
            </TouchableOpacity>
            <View style={{ width: '90%' }}>
              <SearchBar
                placeholder={placeholder}
                onChangeText={onChangeText}
                searchData={searchData}
                useModal={false}
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

const SearchBar = ({
  placeholder,
  onChangeText,
  searchData,
  useModal,
}: SearchBarProps) => {
  const input = useRef<TextInput>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<DatumProps | undefined>();
  const clearInput = () => {
    input.current?.clear();
  };
  const onFocus = () => {
    if (input.current?.isFocused()) {
      setVisible(true);
      return;
    }
    setVisible(false);
  };

  return (
    <>
      <StyledInput
        ref={input}
        placeholder={placeholder}
        rightIcon={<ClearButton clear={clearInput} />}
        onChangeText={onChangeText}
        onFocus={onFocus}
        value={selected?.id}
      />
      {useModal === true ? (
        <SearchModal
          visible={visible}
          setVisible={setVisible}
          placeholder={placeholder}
          onChangeText={onChangeText}
          searchData={searchData}
          setSelected={setSelected}
        />
      ) : null}
    </>
  );
};

export default SearchBar;
