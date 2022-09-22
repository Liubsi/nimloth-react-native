import styled from 'styled-components/native';
import { Button } from '@rneui/themed';

// TODO: Set global colors for buttons, text, etc...

export const MoneyText = styled.Text`
  font-family: Urbanist-SemiBold;
  font-size: 39px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const PinpadContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PinpadButton = styled(Button).attrs({
  type: 'outline',
  containerStyle: {
    marginTop: 7,
    marginBottom: 7,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '30.33%',
  },
  buttonStyle: {
    width: 60,
    height: 60,
    borderColor: '#F3F5F6',
  },
  titleStyle: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 28,
    color: '#0E0E0E',
  },
})``;

export const SendButton = styled(Button).attrs({
  type: 'solid',
  titleStyle: {
    fontSize: 16,
  },
  buttonStyle: {
    height: 45,
    borderRadius: 50,
    backgroundColor: '#404AFF',
  },
})``;

export const StyledButton = styled(Button).attrs(({ type }) => ({
  containerStyle: {
    margin: 10,
  },
  titleStyle: {
    color: type !== 'solid' ? '#404AFF' : '#FFFFFF',
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: 50,
    backgroundColor: type === 'solid' ? '#404AFF' : 'transparent',
  },
}))``;
