import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';

type Props = {
  data: Array<any> | undefined;
};

const ScrollableList = ({ data }: Props) => {
  return (
    <FlatList
      style={{ flex: 1, marginTop: '5%', marginBottom: '5%' }}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            console.log('1');
          }}
          style={{ marginBottom: 10 }}
        >
          <ListItem key={item.id}>
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontFamily: 'Urbanist',
                  fontSize: 14,
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                Chicken
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      )}
    />
  );
};

export default ScrollableList;
