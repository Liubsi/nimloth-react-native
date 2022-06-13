import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

type Props = {
  children?: React.ReactNode; // change to a more specific component that causes a keyboard to pop up
};

const AvoidKeyboardView: React.FC<Props> = ({ children }: Props, style) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default AvoidKeyboardView;
