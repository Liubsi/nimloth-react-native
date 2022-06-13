import React, { useState } from 'react';
import { Button, Input } from '@rneui/themed';
import { View } from 'react-native';
import { CustomText, LoginBackground, SizedBox } from '../../components';
import styles from '../../styles';

const SignUpScreen = () => {
  return (
    <LoginBackground>
      <SizedBox height={50} />
      <CustomText style={{ fontSize: 25, color: 'white' }}>
        Create account
      </CustomText>
      <SizedBox height={50} />
      <View
        style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Input placeholder='First name' />
        <Input placeholder='Last name' />
      </View>
      <View
        style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Input placeholder='E-mail address' />
      </View>
      <View
        style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Input placeholder='Mobile number' />
      </View>
      <View
        style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Input placeholder='Password' />
      </View>
      <SizedBox height={50} />
      <Button
        buttonStyle={styles.button}
        titleStyle={{ color: 'white', fontSize: 10, fontFamily: 'Raleway' }}
        title='Create account'
      />
    </LoginBackground>
  );
};

export default SignUpScreen;
