/* eslint-disable react/no-unstable-nested-components */ // TODO: Remove this line when the following issue is fixed: Implement another component 
import React from 'react'; 
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Home';
import WalletScreen from './Wallet';
import FriendsScreen from './Friends';
import BuySellScreen from './BuySell';
import ChartsScreen from './Charts';
import TransactionHistoryScreen from './TransactionHistory';


const homeName = "Home"; 
const walletName = "Wallet";
const friendsName = "Friends";
const buySellName = "BuySell"; 
const chartsName = "Charts";
const transactionHistoryName = "transactionHistory";

const Tab = createBottomTabNavigator(); 

const NavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName='Wallet'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#9C51B6',
        tabBarInactiveTintColor: '#5946B2',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 12 },
        tabBarStyle: { padding: 10, height: 70 },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: "home" | "home-outline" | "wallet" | "wallet-outline" | "people" | "people-outline" | "list" | "list-outline" | undefined;  
          // if (route.name === "Home") {
          //   iconName = focused ? 'home' : 'home-outline';
          // } else 
          if (route.name === "Wallet") {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === "Friends") {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === "BuySell") {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === "Charts") {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === "transactionHistory") {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
      
      {/* <Tab.Screen name={homeName} component={HomeScreen} /> */}
      <Tab.Screen name={walletName} component={WalletScreen} />
      <Tab.Screen name={friendsName} component={FriendsScreen} />
      <Tab.Screen name={buySellName} component={BuySellScreen} />
      <Tab.Screen name={chartsName} component={ChartsScreen} />
      <Tab.Screen name={transactionHistoryName} component={TransactionHistoryScreen} />
  
    </Tab.Navigator>
  )
}

export default NavigationBar; 