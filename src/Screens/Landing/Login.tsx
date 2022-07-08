import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { CustomText, LoginBackground, SizedBox } from '../../components';
import styles from '../styles';
import { loadFonts } from '../../fonts';
import { RootStackParamList } from './RootStackParams';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { UserAgent } from 'amazon-cognito-identity-js';
import { Authenticator } from '@aws-amplify/ui-react';
type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const fontsLoaded = loadFonts();
  return fontsLoaded ? (
    <LoginBackground>
      
      <SizedBox height={100} />
      <CustomText style={{ color: 'white', fontSize: 35 }} textType='bold'>
        Nimloth
      </CustomText>
      <SizedBox height={150} />
      <View>
        <Button
          buttonStyle={styles.button}
          titleStyle={{ fontSize: 15, fontFamily: 'Raleway' }}
          title='Sign in'
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
      <View>
        <Button
          type='clear'
          buttonStyle={styles.button}
          titleStyle={{ color: 'white', fontSize: 15, fontFamily: 'Raleway' }}
          title='Sign up'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      
    </LoginBackground>
  ) : null;
};

export default LoginScreen;
