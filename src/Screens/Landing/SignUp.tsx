import React, { useState } from 'react';
import { Button, Input } from '@rneui/themed';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInput,
} from 'react-native';
import NavigationContainer, { getPathFromState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { CustomText, LoginBackground, SizedBox } from '../../components';
import { loadFonts } from '../../fonts';
import { RootStackParamList } from './RootStackParams';
import { Amplify, API } from 'aws-amplify';
import { Alert, Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import AuthContext, { useUser } from '../../AuthContext';



type SignUpProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
const SignUpScreen = () => {
const [username, setUsername] = useState('');
const [password2, setPassword2] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signupfucn = () => {
  Auth.signUp(username, password, email);
  addUser();
}

async function addUser() {
  const data = {
    body:{
      user: username,
      email: email
    }
  }
  const apiData = await API.post('userInfoAmplify','/addUser', data)
  
}


  const navigation = useNavigation<SignUpProp>();
  const fontsLoaded = loadFonts();
  return (
  
    <LoginBackground>
     
     <CustomText style={{ color: 'white', fontSize: 35 }} textType='bold'>
        
        Create New Account
      </CustomText>
      <SizedBox height={50} />
      <View style={styles.loginView}>
      <Input
          placeholder="Enter username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      <Input
          secureTextEntry={true}
          placeholder="Enter password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      <Input
          secureTextEntry={true}
          placeholder="Confirm Password"
          value={password2}
          onChangeText={text => setPassword2(text)}
        />
      <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <SizedBox height={50} />
      <Button
        buttonStyle={styles.button}
        titleStyle={{ color: 'white', fontSize: 12, fontFamily: 'Raleway' }}
        title='Sign up(then reload page)'
        onPress={() => signupfucn()}
      />
      
    </LoginBackground>
    
  );
};

export default SignUpScreen;
