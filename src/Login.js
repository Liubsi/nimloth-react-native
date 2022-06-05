import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text h1 style={styles.logo}>
        Nimloth
      </Text>
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
