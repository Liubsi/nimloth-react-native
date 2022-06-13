import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles';

type Props = {
  children?: React.ReactNode;
};

const LoginBackground = ({ children }: Props) => {
  let gradient = ['#9C51B6', '#5946B2'];
  gradient = ['#2F02B5', '#2B1961'];

  return (
    <LinearGradient colors={gradient} style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default LoginBackground;
