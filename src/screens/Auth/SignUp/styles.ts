import styled from 'styled-components';
import { Button, Input } from '@rneui/themed';

export const StyledInput = styled(Input).attrs({
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
