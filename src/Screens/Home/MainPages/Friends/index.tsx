import React, { useState } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { Text, Input, Button } from '@rneui/themed';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../../Profiles';
import { RootStackParamList } from '../../../Landing/RootStackParams';
import { FriendsSearchBar } from '../Send/styles';

// The screen that displays Friends as well as Friend's profiles

type FriendsScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Friends'
>;
const FriendsStack = createNativeStackNavigator(); // create a stack navigator for the friends screen

const FriendsListScreen = () => {
  const navigation = useNavigation<FriendsScreenProps>();

  const friendsData = ['a', 'b', 'Z'];
  const [friendsList, setFriendsList] = useState<string[]>(friendsData); // need to fetch data from BE for this

  // change?
  // eslint-disable-next-line consistent-return
  const handleSearch = (value: string) => {
    if (!value.length) return setFriendsList(friendsData);
    const filteredList = friendsData.filter((friend) =>
      friend.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredList.length) {
      setFriendsList(filteredList);
    } else {
      setFriendsList(friendsList);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Text>Friends</Text>
      </View>
      <FriendsSearchBar onChangeText={handleSearch} />
      <FlatList
        data={friendsList}
        renderItem={({ item }) => (
          <Button
            containerStyle={{ width: '100%' }}
            title={item}
            onPress={() => {
              navigation.push('Profile', { userId: item });
            }} // reevaluate how userId is used
          />
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
