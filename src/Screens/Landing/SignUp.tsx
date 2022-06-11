import React, { useState } from 'react';
import { Avatar, Button, Input } from '@rneui/themed';
import { CustomText, LoginBackground } from '../../components';

const SignUpScreen = () => {
  return (
    <LoginBackground>
      <Avatar
        size={120}
        rounded
        icon={{ name: 'user-circle', type: 'font-awesome' }}
      />
      <Input placeholder='First name' />
      <Input placeholder='Last name' />
      <Input placeholder='E-mail address' />
      <Input placeholder='Mobile number' />
      <Input placeholder='Password' />
      <Button title='Register' />
    </LoginBackground>
  );
};

export default SignUpScreen;
