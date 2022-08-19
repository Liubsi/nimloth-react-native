import React, { useEffect, useReducer, useState } from 'react';
import { Button, Input } from '@rneui/themed';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { CustomText, LoginBackground, SizedBox } from '../../components';
import styles from '../styles';
import { reducer, initialState } from './SignUpReducer';

const SignUpScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [success, setSuccess] = useState('Pending');
  useEffect(() => {
    if (
      state.firstName.trim() &&
      state.lastName.trim() &&
      state.email.trim() &&
      state.phoneNumber.trim() &&
      state.password.trim()
    ) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false,
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true,
      });
    }
  }, [
    state.firstName,
    state.lastName,
    state.email,
    state.phoneNumber,
    state.password,
  ]);

  const handleSignUp = () => {
    // change eventually
    if (
      state.firstName === 'first' &&
      state.lastName === 'last' &&
      state.email === 'email' &&
      state.phoneNumber === 'number' &&
      state.password === 'password'
    ) {
      dispatch({
        type: 'signInFailure',
        payload: false,
      });
      setSuccess('True');
      console.log(state);
    } else {
      dispatch({
        type: 'signInFailure',
        payload: true,
      });
      setSuccess('False');
      console.log(state);
    }
  };

  const handleFirstName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = event.nativeEvent.text;
    dispatch({
      type: 'setFirstName',
      payload: value,
    });
  };
  const handleLastName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = event.nativeEvent.text;
    dispatch({
      type: 'setLastName',
      payload: value,
    });
  };
  const handleEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = event.nativeEvent.text;
    dispatch({
      type: 'setEmail',
      payload: value,
    });
  };
  const handleNumber = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = event.nativeEvent.text;
    dispatch({
      type: 'setPhoneNumber',
      payload: value,
    });
  };
  const handlePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = event.nativeEvent.text;
    dispatch({
      type: 'setPassword',
      payload: value,
    });
  };
  // keyboard will cover inputs if low enough
  return (
    <LoginBackground>
      <CustomText style={{ fontSize: 25, color: 'white' }}>
        {success}
      </CustomText>
      <SizedBox height={50} />
      <CustomText style={{ fontSize: 25, color: 'white' }}>
        Create account
      </CustomText>
      <SizedBox height={50} />
      <View style={styles.loginView}>
        <Input placeholder='First name' onChange={handleFirstName} />
        <Input placeholder='Last name' onChange={handleLastName} />
        <Input placeholder='E-mail address' onChange={handleEmail} />
        <Input placeholder='Mobile number' onChange={handleNumber} />
        <Input placeholder='Password' onChange={handlePassword} />
      </View>
      <SizedBox height={50} />
      <Button
        buttonStyle={styles.button}
        titleStyle={{ color: 'white', fontSize: 10, fontFamily: 'Raleway' }}
        title='Create account'
        disabled={state.isButtonDisabled}
        onPress={() => {
          handleSignUp();
          setTimeout(() => {
            console.log(state);
          }, 1000);
        }} // send state
      />
    </LoginBackground>
  );
};

export default SignUpScreen;
