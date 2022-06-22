import React from 'react';
import { Button, Input } from '@rneui/themed';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { CustomText, LoginBackground, SizedBox } from '../../components';
import { loadFonts } from '../../fonts';
import { RootStackParamList } from './RootStackParams';

type SignInProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const SignInScreen = () => {
  const navigation = useNavigation<SignInProp>();
  const fontsLoaded = loadFonts();
  return (
    <LoginBackground>
      <CustomText style={{ color: 'white', fontSize: 20 }} textType='regular'>
        Nimloth Sign-In
      </CustomText>
      <SizedBox height={50} />
      <View style={styles.loginView}>
        <Input placeholder='E-Mail' />
        <Input placeholder='Password' />
      </View>

      <SizedBox height={50} />
      <Button
        buttonStyle={styles.button}
        titleStyle={{ color: 'white', fontSize: 12, fontFamily: 'Raleway' }}
        title='Sign In'
      />
    </LoginBackground>
  );
};

export default SignInScreen;
