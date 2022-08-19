import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from '@rneui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { loadFonts } from '../../fonts';
import { RootStackParamList } from './RootStackParams';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const fontsLoaded = loadFonts();
  return fontsLoaded ? (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ color: 'black', fontSize: 35 }}>Nimloth</Text>
      <View>
        <Button
          titleStyle={{ fontSize: 15, fontFamily: 'Raleway' }}
          title='Sign in'
        />
      </View>
      <View>
        <Button
          type='clear'
          titleStyle={{ color: 'black', fontSize: 15, fontFamily: 'Raleway' }}
          title='Sign up'
        />
      </View>
    </SafeAreaView>
  ) : null;
};

export default LoginScreen;
