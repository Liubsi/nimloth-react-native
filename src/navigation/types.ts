import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type SignUpParamList = {
  Email: undefined;
  Password: undefined;
  Name: undefined;
  Phone: undefined;
  DOB: undefined;
  Address: undefined;
  Confirm: undefined;
};

export type RootStackParamList = {
  Main: undefined;
  Landing: undefined;
  SignUp: NavigatorScreenParams<SignUpParamList>;
  SignIn: undefined;
  Home: undefined; // Home is the name of the screen
  Friends: undefined;
  Profile: { userId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type MainParamList = {
  Send: undefined;
  Wallet: undefined;
  Friends: undefined;
  Charts: undefined;
  History: undefined;
};

export type MainScreenProps<T extends keyof MainParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }
