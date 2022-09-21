import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SettingsIcon } from './styles';

// TODO: Align header text
type Props = {
  headerName: string;
  onIconPress: () => void;
};

const MainHeader = ({ headerName, onIconPress }: Props) => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{ height: '11%', alignItems: 'center' }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          flexDirection: 'row',
        }}
      >
        <View style={{ width: 18 }} />
        <Text style={{ fontSize: 20, fontFamily: 'Urbanist-SemiBold' }}>
          {headerName}
        </Text>
        <TouchableOpacity onPress={onIconPress}>
          <SettingsIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;
