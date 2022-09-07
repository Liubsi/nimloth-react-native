import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

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

export type MainParamList = {
  // Main screens
  Send: undefined;
  Wallet: undefined;
  Friends: undefined;
  Charts: undefined;
  History: undefined;

  // Additional screens
  CoinInfo: undefined;
};

export type AuthParamList = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: NavigatorScreenParams<SignUpParamList>;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainParamList>;
  Auth: NavigatorScreenParams<AuthParamList>;
};

// Screen props

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type SignUpScreenProps<T extends keyof SignUpParamList> =
  CompositeScreenProps<
    StackScreenProps<SignUpParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MainScreenProps<T extends keyof MainParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainParamList, T>,
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
