import React, { useState } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../../Profiles';
import { FriendsSearchBar } from '../Send/styles';
import ExploreTab from './ExploreTab';

// The screen that displays Friends as well as Friend's profiles

type FriendsScreenProps = NativeStackNavigationProp<
  { Friends: undefined; Profile: { userId: string } },
  'Friends'
>;

type FriendProps = {
  firstName: string;
  lastName: string;
  id: string;
};

const FriendsStack = createNativeStackNavigator();

const FriendsListScreen = () => {
  const navigation = useNavigation<FriendsScreenProps>();

  const friendsData = [
    { firstName: 'Bob', lastName: 'Jones', id: '1' },
    { firstName: 'Jerry', lastName: 'Jones', id: '2' },
    { firstName: 'Randall', lastName: 'Smith', id: '3' },
  ];
  const [friendsList, setFriendsList] = useState<FriendProps[]>(friendsData);

  const handleSearch = (value: string) => {
    if (!value.length) {
      setFriendsList(friendsData);
      return;
    }
    const filteredList = friendsData.filter(
      ({ firstName, lastName }) =>
        firstName.toLowerCase().includes(value.toLowerCase()) ||
        lastName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredList.length) {
      setFriendsList(filteredList);
    } else {
      setFriendsList(friendsList);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 60 }}>
      <ExploreTab />
      <FriendsSearchBar onChangeText={handleSearch} />
      <FlatList
        data={friendsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push('Profile', { userId: item.id });
            }}
            style={{ marginBottom: 10 }}
          >
            <ListItem key={item.id}>
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontFamily: 'Urbanist',
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
    </SafeAreaView>
  );
};

const FriendsScreen = () => {
  return (
    <FriendsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FriendsStack.Screen name='FriendsList' component={FriendsListScreen} />
      <FriendsStack.Screen name='Profile' component={ProfileScreen} />
    </FriendsStack.Navigator>
  );
};

export default FriendsScreen;
