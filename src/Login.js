import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import CustomText from './components/CustomText';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <CustomText h1 style={styles.logo}>
        Nimloth
      </CustomText>
      <View style={styles.loginLogoOffset}>
        <Image
          style={styles.loginLogo}
          source={require('../assets/images/nimlogo.png')}
        />
      </View>
      <View>
        <Input
          inputContainerStyle={styles.inputContainer}
          placeholder='Email'
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View>
        <Input
          inputContainerStyle={styles.inputContainer}
          placeholder='Password'
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Button
        buttonStyle={styles.forgot}
        titleStyle={{ fontSize: 10 }}
        title='Forgot Password?'
      />
      <Button
        buttonStyle={styles.loginButton}
        containerStyle={{ width: '80%' }}
        titleStyle={{ fontSize: 14 }}
        title='Login'
        onPress={() => {
          navigation.navigate('Profile', { name: 'Bob' });
        }}
      />
      <Button
        buttonStyle={styles.registerButton}
        containerStyle={{ width: '80%' }}
        titleStyle={{ fontSize: 14 }}
        title='Register'
      />
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
