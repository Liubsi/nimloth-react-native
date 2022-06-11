import React from 'react';
import { CustomText, LoginBackground } from '../../components';

const SignInScreen = () => {
  return (
    <LoginBackground>
      <CustomText style={{ color: 'white', fontSize: 20 }} textType='regular'>
        Nimloth Sign In
      </CustomText>
    </LoginBackground>
  );
};

export default SignInScreen;
