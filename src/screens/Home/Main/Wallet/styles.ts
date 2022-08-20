import styled from 'styled-components/native';
import { Button } from '@rneui/themed';

export const BalanceText = styled.Text`
  fontsize: 31px;
  font-family: Urbanist-SemiBold;
  elevation: 10;
  top: 155;
`;
export const BalanceNameText = styled.Text`
  fontsize: 17px;
  font-family: Urbanist-Light;
  elevation: 10;
  top: 155;
`;

export const TitleText = styled.Text`
  fontsize: 26px;
  font-family: Urbanist-Medium;
  elevation: 10;
  top: 51;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  alignitems: center;
`;

export const StyledButton = styled(Button).attrs(({ type }) => ({
  titleStyle: {
    color: type !== 'solid' ? '#404AFF' : '#FFFFFF',
    fontSize: 15,
  },
  buttonStyle: {
    borderRadius: 50,
    backgroundColor: type === 'solid' ? '#404AFF' : '#FFFFFF',
    width: 155,
    height: 45,
  },
}))``;
