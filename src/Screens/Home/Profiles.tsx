/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';

const ProfileScreen = ({ navigation, route }: any) => {
  // add props to this component
  console.log(navigation);
  console.log(route.params.userId); // redefine
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Profile</Text>
      <Text>{route.params.userId}</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
