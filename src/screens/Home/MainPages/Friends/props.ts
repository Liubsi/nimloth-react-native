export type FriendProps = {
  firstName: string;
  lastName: string;
  id: string;
};

export type FriendsViewProps = {
  handleSearch: (value: string) => void;
  friendsList: FriendProps[];
};
