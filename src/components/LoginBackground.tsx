import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles';

type Props = {
  children?: React.ReactNode;
};

const LoginBackground = ({ children }: Props) => {
  return (
    <LinearGradient
      colors={['#9C51B6', '#5946B2']}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  );
};

export default LoginBackground;
