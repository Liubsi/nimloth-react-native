import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Tabs from '@components/Tabs';
import ProfileScreen from '../../Profiles';
import { FriendsSearchBar } from '../Send/styles';

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

type FriendsViewProps = {
  handleSearch: (value: string) => void;
  friendsList: FriendProps[];
};

const MyFriendsView = ({ handleSearch, friendsList }: FriendsViewProps) => {
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
                navigation.push('Profile', { userId: item.id });
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

const ExploreFriendsView = ({
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
                navigation.push('Profile', { userId: item.id });
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

const FriendsStack = createNativeStackNavigator();

const FriendsListScreen = () => {
  const friendsData = [
    { firstName: 'Bob', lastName: 'Jones', id: '1' },
    { firstName: 'Jerry', lastName: 'Jones', id: '2' },
    { firstName: 'Randall', lastName: 'Smith', id: '3' },
    { firstName: 'John', lastName: 'Doe', id: '4' },
    { firstName: 'Jane', lastName: 'Doe', id: '5' },
    { firstName: 'Joe', lastName: 'Doe', id: '6' },
    { firstName: 'Jill', lastName: 'Doe', id: '7' },
    { firstName: 'Jack', lastName: 'Doe', id: '8' },
    { firstName: 'Jill', lastName: 'Doe', id: '9' },
    { firstName: 'Jack', lastName: 'Button', id: '10' },
    { firstName: 'Jill', lastName: 'Button', id: '11' },
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
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Tabs tabTitles={['My Friends', 'Explore']}>
        <MyFriendsView handleSearch={handleSearch} friendsList={friendsList} />
        <ExploreFriendsView
          handleSearch={handleSearch}
          friendsList={friendsList}
        />
      </Tabs>
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
