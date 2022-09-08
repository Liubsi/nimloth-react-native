import type {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {
  StackScreenProps,
  StackNavigationProp,
} from '@react-navigation/stack';
import type {
  BottomTabScreenProps,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

// Param lists

export type SignUpParamList = {
  Email: undefined;
  Password: undefined;
  Name: undefined;
  Phone: undefined;
  DOB: undefined;
  Address: undefined;
  Confirm: undefined;
};

export type SearchParamList = {
  SearchCoins: undefined;
  CoinInfo: undefined;
};

export type MainParamList = {
  // Main screens
  Send: undefined;
  Wallet: undefined;
  Friends: undefined;
  Search: NavigatorScreenParams<SearchParamList>;
  History: undefined;
};

export type MainStackParamList = {
  Main: NavigatorScreenParams<MainParamList>;
  Settings: undefined;
};

export type AuthParamList = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: NavigatorScreenParams<SignUpParamList>;
};

export type RootStackParamList = {
  MainStack: NavigatorScreenParams<MainStackParamList>;
  Auth: NavigatorScreenParams<AuthParamList>;
};

// Nav props

export type MainStackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList>,
  StackNavigationProp<RootStackParamList>
>;

// Screen props

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type SignUpScreenProps<T extends keyof SignUpParamList> =
  CompositeScreenProps<
    StackScreenProps<SignUpParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type SearchScreenProps<T extends keyof SearchParamList> =
  CompositeScreenProps<
    StackScreenProps<SearchParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MainScreenProps<T extends keyof MainParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  CompositeScreenProps<
    StackScreenProps<MainStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type AuthScreenProps<T extends keyof AuthParamList> =
  CompositeScreenProps<
    StackScreenProps<AuthParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }
