import React from 'react';
import { CustomText, LoginBackground } from '../../components';

const HomeScreen = () => {
  return (
    <LoginBackground>
      <CustomText style={{ color: 'white', fontSize: 20 }} textType='regular'>
        Nimloth Home
      </CustomText>
    </LoginBackground>
  );
};

export default HomeScreen;
