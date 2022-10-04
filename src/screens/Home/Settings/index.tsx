import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { RootStackScreenProps } from '@navigation/types';
import { Auth } from 'aws-amplify';
import SCREEN_NAMES from '@navigation/names';
import MainHeader from '@components/MainHeader';
import { StyledButton } from './styles';

const SettingsScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREEN_NAMES.SETTINGS>) => {
  return (
    <>
      <MainHeader
        headerName={route.name}
        showSettingsIcon={false}
        showBackIcon
        onBackIconPress={() => navigation.goBack()}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> SETTINGS </Text>
        <StyledButton title='signout' onPress={() => Auth.signOut()} />
      </View>
    </>
  );
};

export default SettingsScreen;
