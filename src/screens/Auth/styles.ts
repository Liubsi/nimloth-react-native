import styled from 'styled-components/native';
import { Button } from '@rneui/themed';

export const SendButton = styled(Button).attrs({
  containerStyle: {
    margin: 20,
  },
  titleStyle: {
    fontSize: 16,
  },
  buttonStyle: {
    height: 45,
    borderRadius: 50,
    backgroundColor: '#404AFF',
  },
})``;

export default SendButton;
