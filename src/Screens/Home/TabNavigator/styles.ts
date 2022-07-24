import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

// TODO: Add icons to the tabs

const Tab = createBottomTabNavigator();

export const StyledTabNavigator = styled(Tab.Navigator).attrs({
  sceneContainerStyle: {
    backgroundColor: '#FFFFFF',
  },
  screenOptions: {
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 65,
      padding: 20,
      backgroundColor: '#FFFFFF',
      margin: 10,
      borderRadius: 100,
    },
    headerTitleStyle: {
      fontSize: 32,
      fontFamily: 'Urbanist',
    },
  },
})``;

export const StyledTabScreen = styled(Tab.Screen).attrs({
  options: {
    tabBarLabel: '',
  },
})``;
