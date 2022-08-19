import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';
import FriendsScreenProps, { FriendsViewProps } from './props';
import { FriendsSearchBar } from '../Send/styles';

const ExploreFriendsTabView = ({
  handleSearch,
  friendsList,
}: FriendsViewProps) => {
  const navigation = useNavigation<FriendsScreenProps>();
  return (
    <>
      <FriendsSearchBar onChangeText={handleSearch} />
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={friendsList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile', { userId: item.id });
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
                    {item.firstName} {item.lastName}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default ExploreFriendsTabView;
