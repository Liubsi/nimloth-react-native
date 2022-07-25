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
    height: 60,
    width: 60,
  },
})``;

export const FriendsIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'users',
  size: 30,
})``;

export const ChartsIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'chart-bar',
  size: 30,
  containerStyle: {
    marginLeft: 15,
  },
})``;

export const WalletIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'wallet',
  size: 30,
})``;

export const HistoryIcon = styled(Icon).attrs({
  type: 'font-awesome-5',
  name: 'clock',
  size: 30,
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
      marginRight: 15,
      marginLeft: 15,
      marginBottom: 30,
      borderRadius: 100,
    },
    headerTitleStyle: {
      fontSize: 32,
      fontFamily: 'Urbanist',
    },
  },
})``;

export const StyledTabIcon = styled.Svg`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="85" height="85" viewBox="0 0 85 85">
  <defs>
    <style>
      .cls-1 {
        fill: #a218df;
      }

      .cls-2 {
        fill: #fff;
        fill-rule: evenodd;
      }

      .cls-3 {
        filter: url(#Ellipse_7236);
      }
    </style>
    <filter id="Ellipse_7236" x="0" y="0" width="85" height="85" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5.5" result="blur"/>
      <feFlood flood-color="#f7931a" flood-opacity="0.231"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_7512" data-name="Group 7512" transform="translate(-145.5 -731.5)">
    <g class="cls-3" transform="matrix(1, 0, 0, 1, 145.5, 731.5)">
      <circle id="Ellipse_7236-2" data-name="Ellipse 7236" class="cls-1" cx="26" cy="26" r="26" transform="translate(16.5 13.5)"/>
    </g>
    <g id="paper-plane-1" transform="translate(175.301 758.877)">
      <g id="Group_7512-2" data-name="Group 7512" transform="translate(1.7 3.123)">
        <path id="Path_4241" data-name="Path 4241" class="cls-2" d="M22.7,3.438a.791.791,0,0,1,.255.775L19.242,20.673a.805.805,0,0,1-.457.542.833.833,0,0,1-.711-.032l-4.311-2.336-3.3,2.761a.823.823,0,0,1-.85.106.8.8,0,0,1-.467-.722V16.34L2.135,12.666a.821.821,0,0,1-.435-.754.776.776,0,0,1,.488-.7l6.9-2.8a.777.777,0,0,1,1.03.435.791.791,0,0,1-.446,1.03L4.365,12.018,9.76,14.843l8.867-8.622-4.715,1.9a.8.8,0,0,1-1.041-.446.786.786,0,0,1,.435-1.041l8.5-3.451a.775.775,0,0,1,.807.127Zm-1.89,3.037L11.3,15.7l6.616,3.579L20.8,6.454ZM10.758,17.232l1.508.818-1.518,1.264V17.222Z" transform="translate(-1.7 -3.123)"/>
      </g>
    </g>
  </g>
</svg>
  style: {
    textAlignVertical: 'center',
  },
`;

export const StyledTabScreen = styled(Tab.Screen).attrs({
  options: {
    tabBarLabel: '',
  },
})``;
