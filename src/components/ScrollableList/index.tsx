import React from 'react';
import { ListRenderItem, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import type { DatumProps } from '@common/types';
import { StyledFlatList, StyledListItemTitle } from './styles';

type TouchableProps = {
  onSelectItem?: () => void;
  setSelected: (value: React.SetStateAction<any>) => void;
};

type ScrollableProps = TouchableProps & {
  data: DatumProps[];
};

type ItemProps = TouchableProps & {
  item: DatumProps;
};

const TouchableListItem = ({ item, setSelected, onSelectItem }: ItemProps) => (
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
);

const ScrollableList = ({
  data,
  onSelectItem,
  setSelected,
}: ScrollableProps) => {
  const renderItem: ListRenderItem<DatumProps> = ({ item }) => (
    <TouchableListItem
      item={item}
      setSelected={setSelected}
      onSelectItem={onSelectItem}
    />
  );

  return (
    <StyledFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: DatumProps) => item.id}
    />
  );
};

export default ScrollableList;
