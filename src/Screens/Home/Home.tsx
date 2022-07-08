import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button } from '@rneui/themed';
import { CustomText, LoginBackground, SizedBox } from '../../components';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { UserAgent } from 'amazon-cognito-identity-js';
import { useAuthenticator } from '@aws-amplify/ui-react';
import AuthContext, { useUser } from '../../AuthContext';



// buy sell


async function signOut() {
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

const HomeScreen = () => {
  const { user } = useUser();
  const [value, setValue] = useState<string>('0');
  const padLayout = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '0',
    '<',
  ];
  
  // might want to modify to make sure we only allow 2 digits past the decimal point
  const handlePress = (item: string) => {
    // cap the value to max of 7 digits
    if (value.length > 7 && item !== '<') {
      return;
    }

    if (value === '0' && item !== '<' && item !== '.') {
      setValue(item);
    } else {
      if (item === '.') {
        // don't allow multiple decimals
        if (value.includes('.')) {
          return;
        }
      } else if (item === '<') {
        // reset to 0
        if (value.length === 1) {
          setValue('0');
          return;
        }
        setValue(value.slice(0, -1)); // remove last character
        return;
      }
      setValue(value + item);
    }
    
  };

  const renderPad = () => {
    return padLayout.map((item) => (
      <Button
        containerStyle={{ width: '25%', margin: 5, borderRadius: 20 }}
        key={item}
        title={item}
        onPress={() => handlePress(item)}
      />
    ));
  };

  const handleSubmit = () => {
    // dont want to allow empty values to be sent
    if (value === '0') {
      console.log('empty value');
      return;
    }
    console.log(value);
    setValue('0');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SizedBox height={100} />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <CustomText style={{ color: 'black', fontSize: 30 }} textType='regular'>
          User: {user.username}
        </CustomText>
        <CustomText style={{ color: 'black', fontSize: 30 }} textType='regular'>
          $ {value}
        </CustomText>
        
       
      </View>
      <SizedBox height={50} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {renderPad()}
      </View>
      <Button title='Send' onPress={signOut} />
    </SafeAreaView>
  );
};

export default HomeScreen;
