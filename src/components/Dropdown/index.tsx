import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text, ListItem } from '@rneui/themed';
import { CoinProps } from '@common/types';
import {
  ChevronDown,
  DropdownLabelContainer,
  DropdownPressable,
  DropdownContainer,
  DropdownListContainer,
} from './styles';

// Dropdown for COINS

type Props = {
  defaultLabel?: string;
  data: CoinProps[];
  onSelect: (item: CoinProps) => void;
};

const Dropdown = ({ defaultLabel, data, onSelect }: Props) => {
  const [visible, setVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string>('');

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const onItemPress = (item: CoinProps): void => {
    setSelectedLabel(item.coinName);
    setVisible(false);
    onSelect(item);
  };

  const renderDropdown = () => {
    return visible ? (
      <DropdownListContainer>
        <FlatList
          style={{ borderRadius: 8 }}
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
                      fontSize: 14,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    {item.coinName}
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
