import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text, ListItem } from '@rneui/themed';
import {
  ChevronDown,
  DropdownLabelContainer,
  DropdownPressable,
  DropdownContainer,
  DropdownListContainer,
} from './styles';

interface Props {
  defaultLabel: string;
  data: Array<{ label: string; value: string; id: string }>;
  onSelect: (item: { label: string; value: string; id: string }) => void; // TODO: Add a type for this?
}

const Dropdown = ({ defaultLabel, data, onSelect }: Props) => {
  const [visible, setVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string>('');

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const onItemPress = (item: {
    label: string;
    value: string;
    id: string;
  }): void => {
    setSelectedLabel(item.label);
    setVisible(false);
    onSelect(item);
  };

  const renderDropdown = () => {
    return visible ? (
      <DropdownListContainer>
        <FlatList
          style={{ margin: 20, borderRadius: 8 }}
          data={data}
          keyExtractor={(item) => item.id}
          decelerationRate='fast'
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onItemPress(item)}>
              <ListItem topDivider key={item.id}>
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      fontFamily: 'Urbanist',
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    {item.label}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          )}
        />
      </DropdownListContainer>
    ) : null;
  };

  return (
    <DropdownContainer>
      <DropdownPressable onPress={toggleDropdown}>
        <DropdownLabelContainer>
          <Text style={{ color: '#000000', fontSize: 14 }}>
            {selectedLabel || defaultLabel}
          </Text>
          <ChevronDown />
        </DropdownLabelContainer>
      </DropdownPressable>
      {renderDropdown()}
    </DropdownContainer>
  );
};

export default Dropdown;
