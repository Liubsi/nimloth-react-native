import React, { useRef } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { InputProps } from '@rneui/themed';
import { XIcon, StyledInput } from './styles';

type SearchBarProps = InputProps & {
  placeholder: string;
  onChangeText?: (value: string) => void;
  onFocus?: () => void;
  value?: string;
};

const ClearButton = ({ clear }: { clear: () => void }) => {
  return (
    <TouchableOpacity onPress={clear}>
      <XIcon />
    </TouchableOpacity>
  );
};

const SearchBar = ({
  placeholder,
  onChangeText,
  onFocus,
  value,
}: SearchBarProps) => {
  const input = useRef<TextInput>(null);
  const clearInput = () => {
    input.current?.clear();
  };

  return (
    <StyledInput
      ref={input}
      placeholder={placeholder}
      rightIcon={<ClearButton clear={clearInput} />}
      onChangeText={onChangeText}
      onFocus={onFocus}
      value={value}
    />
  );
};

export default SearchBar;
