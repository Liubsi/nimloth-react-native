import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

type FriendsScreenProps = NativeStackNavigationProp<
  { Friends: undefined; Profile: { userId: string } },
  'Friends'
>;

export type FriendProps = {
  firstName: string;
  lastName: string;
  id: string;
};

export type FriendsViewProps = {
  handleSearch: (value: string) => void;
  friendsList: FriendProps[];
};

export default FriendsScreenProps;
