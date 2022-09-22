/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, Modal, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputProps } from '@rneui/themed';
import { BackIcon } from '@components/MainHeader/styles';
import { XIcon, StyledInput } from './styles';

type SearchBarProps = InputProps & {
  placeholder: string;
  onChangeText: (value: string) => void;
  searchData?: Array<any>;
  // eslint-disable-next-line react/no-unused-prop-types
  useModal?: boolean; // Shows modal popup
};

const ClearButton = ({ clear }: { clear: () => void }) => {
  return (
    <TouchableOpacity onPress={clear}>
      <XIcon />
    </TouchableOpacity>
  );
};

type ModalProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = SearchBarProps & ModalProps;

const SearchModal = ({
  placeholder,
  onChangeText,
  searchData,
  visible,
  setVisible,
}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='fullScreen'
    >
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}
      >
        <SearchBar
          placeholder={placeholder}
          onChangeText={onChangeText}
          searchData={searchData}
          useModal={false}
        />
        <TouchableOpacity onPress={() => setVisible(false)}>
          <BackIcon />
        </TouchableOpacity>
      </SafeAreaView>
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
      />
      {useModal !== false ? (
        <SearchModal
          visible={visible}
          setVisible={setVisible}
          placeholder={placeholder}
          onChangeText={onChangeText}
          searchData={searchData}
        />
      ) : null}
    </>
  );
};

export default SearchBar;
