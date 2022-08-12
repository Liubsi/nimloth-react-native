import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { Icon } from '@rneui/themed';
// TODO: Add icons to the tabs

const Tab = createBottomTabNavigator();

export const SendIcon = styled(Icon).attrs({
  reverse: true,
  type: 'font-awesome',
  name: 'paper-plane',
  size: 20,
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
  },
})``;

export const FriendsIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'users',
  size: 20,
})``;

export const ChartsIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'chart-bar',
  size: 20,
  containerStyle: {
    marginLeft: 15,
  },
})``;

export const WalletIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'wallet',
  size: 20,
})``;

export const HistoryIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'clock',
  size: 20,
  containerStyle: {
    marginRight: 15,
  },
})``;

export const StyledTabNavigator = styled(Tab.Navigator).attrs({
  safeAreaInsets: {
    bottom: 0,
  },
  screenOptions: {
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 65,
      marginTop: 20,
      marginRight: 15,
      marginLeft: 15,
      marginBottom: 30,
      borderRadius: 100,
    },
    headerTitleStyle: {
      fontSize: 26,
      fontFamily: 'Urbanist',
    },
  },
})``;

export const StyledTabScreen = styled(Tab.Screen).attrs({
  options: {
    tabBarLabel: '',
  },
})``;
