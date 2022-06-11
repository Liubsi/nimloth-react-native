import React, { useState } from 'react';
import { Avatar, Button, Input } from 'react-native-elements';
import { CustomText, LoginBackground } from '../../components';

const SignUpScreen = () => {
  return (
    <LoginBackground>
      <Avatar
        size={120}
        rounded
        icon={{ name: 'user-circle', type: 'font-awesome' }}
      />
      <Input placeholder='First name' autoCompleteType={false} />
      <Input placeholder='Last name' autoCompleteType={false} />
      <Input placeholder='E-mail address' autoCompleteType={false} />
      <Input placeholder='Mobile number' autoCompleteType={false} />
      <Input placeholder='Password' autoCompleteType={false} />
      <Button title='Register' />
    </LoginBackground>
  );
};

export default SignUpScreen;
