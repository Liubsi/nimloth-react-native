import React, { useState } from 'react';
import { FlatList, Modal, View, Pressable } from 'react-native';
import { Text, Button } from '@rneui/themed';
import {
  ChevronDown,
  DropdownLabelContainer,
  DropdownPressable,
  DropdownContainer,
} from './styles';

interface Props {
  label: string;
  data: Array<{ label: string; value: string; id: string }>;
  onSelect: (item: { label: string; value: string }) => void; // TODO: Add a type for this?
}

const Dropdown = ({ label, data, onSelect }: Props) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    return visible ? (
      <View style={{ position: 'absolute', bottom: 0 }}>
        {data.map((item) => (
          <Text key={item.id}>Potato</Text>
        ))}
      </View>
    ) : null;
  };

  return (
    <DropdownContainer>
      <DropdownPressable onPress={toggleDropdown}>
        <DropdownLabelContainer>
          <Text style={{ color: '#FFFFFF' }}>{label}</Text>
          <ChevronDown />
        </DropdownLabelContainer>
      </DropdownPressable>
      {renderDropdown()}
    </DropdownContainer>
  );
};

export default Dropdown;
