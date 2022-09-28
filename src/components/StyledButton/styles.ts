import styled from 'styled-components/native';
import { Button } from '@rneui/themed';

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

export default StyledButton;
