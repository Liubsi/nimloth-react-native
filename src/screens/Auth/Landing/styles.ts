import styled from 'styled-components/native';
import { Button } from '@rneui/themed';

export const StyledButton = styled(Button).attrs(({ type }) => ({
  containerStyle: {
    width: '40%',
    margin: 10,
  },
  titleStyle: {
    color: type !== 'solid' ? '#404AFF' : '#FFFFFF',
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: '50%',
    backgroundColor: type === 'solid' ? '#404AFF' : 'transparent',
  },
}))``;

export const ButtonContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
`;
