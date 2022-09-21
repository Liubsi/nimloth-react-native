import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SettingsIcon, BackIcon } from './styles';

// TODO: Align header components when items are removed
// TODO: Change some of the prop names to be more specific

type Props = {
  headerName: string;
  onIconPress?: () => void;
  onBackIconPress?: () => void;
  showSettingsIcon?: boolean;
  showBackIcon?: boolean;
};

const MainHeader = ({
  headerName,
  onIconPress,
  onBackIconPress,
  showSettingsIcon,
  showBackIcon,
}: Props) => {
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
        {showBackIcon === true ? (
          <TouchableOpacity onPress={onBackIconPress}>
            <BackIcon />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 18 }} />
        )}
        <Text style={{ fontSize: 20, fontFamily: 'Urbanist-SemiBold' }}>
          {headerName}
        </Text>
        {showSettingsIcon !== false ? (
          <TouchableOpacity onPress={onIconPress}>
            <SettingsIcon />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 18 }} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;
