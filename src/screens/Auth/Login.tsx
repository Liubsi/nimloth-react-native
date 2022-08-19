import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from '@rneui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { loadFonts } from '../../fonts';
import { RootStackParamList } from './RootStackParams';
import { SendButton } from './styles';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const fontsLoaded = loadFonts();
  return fontsLoaded ? (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ color: 'black', fontSize: 35 }}>Nimloth</Text>
      <View>
        <SendButton
          type='clear'
          titleStyle={{ fontSize: 15, fontFamily: 'Raleway' }}
          title='Sign in'
        />
      </View>
      <View>
        <SendButton title='Sign up' />
      </View>
    </SafeAreaView>
  ) : null;
};

export default LoginScreen;
