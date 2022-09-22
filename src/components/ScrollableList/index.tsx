import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import { StyledFlatList, StyledListItemTitle } from './styles';

type Props = {
  data: Array<any> | undefined;
  onSelectItem?: () => void;
  setSelected: (value: React.SetStateAction<any>) => void;
};

const ScrollableList = ({ data, onSelectItem, setSelected }: Props) => {
  return (
    <StyledFlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            setSelected(item);
            onSelectItem?.();
          }}
          style={{ marginBottom: 10 }}
        >
          <ListItem key={item.id}>
            <ListItem.Content>
              <StyledListItemTitle>Chicken</StyledListItemTitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      )}
    />
  );
};

export default ScrollableList;
