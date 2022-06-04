import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { registerRootComponent } from 'expo';

const icon = require('../assets/splash.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style={{ color: 'auto' }} />

      <Input
        label='Email'
        placeholder='email@address.com'
        leftIcon={<Icon name='user' size={24} color='black' />}
        errorStyle={{ color: 'red' }}
        errorMessage='ERROR'
      />
      <Input
        label='Password'
        placeholder='Password'
        leftIcon={<Icon name='user' size={24} color='black' />}
        errorStyle={{ color: 'red' }}
        errorMessage='ERROR'
      />
    </View>
  );
}

export default registerRootComponent(App);
