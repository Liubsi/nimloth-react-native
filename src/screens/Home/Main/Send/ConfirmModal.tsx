import React from 'react';
import { View, Modal } from 'react-native';
import { Text } from '@rneui/themed';
import StyledButton from '@components/StyledButton';

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmModal = ({ modalVisible, setModalVisible }: Props) => {
  return (
    <Modal
      visible={modalVisible}
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
        <Text>Big Papa</Text>
        <View style={{ width: '70%' }}>
          <StyledButton onPress={() => setModalVisible(false)}>
            Cancel
          </StyledButton>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
