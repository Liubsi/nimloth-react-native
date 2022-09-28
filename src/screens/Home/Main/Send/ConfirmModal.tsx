import React from 'react';
import { View, Modal } from 'react-native';
import { Text } from '@rneui/themed';
import { FriendProps, CoinProps } from '@common/types';
import { StyledButton } from './styles';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    amount: string;
    coin: CoinProps | undefined;
    recipient: FriendProps | undefined;
  };
};

// TODO: Actually send

const ConfirmModal = ({ visible, setVisible, data }: Props) => {
  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='formSheet'
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontFamily: 'Urbanist-SemiBold',
          marginTop: 20,
        }}
      >
        Confirm Payment?
      </Text>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Text>{`You are sending $${data.amount} (${data.coin?.coinName}) to ${data.recipient?.firstName} ${data.recipient?.lastName}`}</Text>
        <View style={{ width: '70%' }}>
          <StyledButton type='solid' onPress={() => setVisible(false)}>
            Send
          </StyledButton>
          <StyledButton onPress={() => setVisible(false)}>Cancel</StyledButton>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
