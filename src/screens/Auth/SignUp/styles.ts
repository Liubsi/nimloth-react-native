import styled from 'styled-components';
import { Button, Input, Icon } from '@rneui/themed';

export const CheckIcon = styled(Icon).attrs({
  marginRight: 15,
  type: 'font-awesome-5',
  name: 'check',
  color: '#52C41A',
  size: 18,
})``;

export const XIcon = styled(Icon).attrs({
  marginRight: 15,
  type: 'font-awesome-5',
  name: 'times',
  color: '#FF4D4F',
  size: 18,
})``;

export const StyledInput = styled(Input).attrs({
  autoCapitalize: 'none',
  autoComplete: 'off',
  autoCorrect: false,
  inputContainerStyle: {
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  inputStyle: {
    textAlign: 'center',
    borderRadius: 50,
    fontSize: 15,
  },
})``;

export const StyledButton = styled(Button).attrs({
  type: 'solid',
  containerStyle: {
    marginTop: 30,
    width: '100%',
  },
  titleStyle: {
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: 50,
    backgroundColor: '#404AFF',
  },
})``;
