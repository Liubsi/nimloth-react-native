import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { CustomText, SizedBox } from '../../components';
import styles from '../../styles';
import loadFonts from '../../fonts';
import { RootStackParamList } from './RootStackParams';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const fontsLoaded = loadFonts();
  return fontsLoaded ? (
    <LinearGradient
      colors={['#9C51B6', '#5946B2']}
      style={styles.linearGradient}
    >
      <CustomText style={{ color: 'white', fontSize: 20 }} textType='regular'>
        Nimloth
      </CustomText>
      <SizedBox height={250} />
      <View>
        <Button
          buttonStyle={styles.button}
          titleStyle={{ fontSize: 10, fontFamily: 'Poppins' }}
          title='Sign in'
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
      <View>
        <Button
          buttonStyle={styles.button}
          titleStyle={{ fontSize: 10, fontFamily: 'Poppins' }}
          title='Sign up'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </LinearGradient>
  ) : null;
};

export default LoginScreen;
