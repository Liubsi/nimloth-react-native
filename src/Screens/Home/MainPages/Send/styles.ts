import styled from 'styled-components/native';
import { Button, Input } from '@rneui/themed';

// TODO: Set global colors for buttons, text, etc...

export const MoneyText = styled.Text`
  font-family: Urbanist-SemiBold;
  font-size: 39px;
`;

export const PinpadContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PinpadButton = styled(Button).attrs({
  type: 'outline',
  containerStyle: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 7,
    marginBottom: 7,
  },
  buttonStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#CED0DE',
  },
  titleStyle: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 28,
    color: '#0E0E0E',
  },
})``;

export const SendButton = styled(Button).attrs({
  type: 'solid',
  containerStyle: {
    margin: 20,
  },
  buttonStyle: {
    height: 45,
    borderRadius: 50,
    backgroundColor: '#404AFF',
  },
})``;

export const FriendsSearchBar = styled(Input).attrs({
  placeholder: 'Search friends',
  inputContainerStyle: {
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 50,
  },
  inputStyle: {
    textAlign: 'center',
  },
})``;

// UNUSED, in favor of Dropdown component

// export const CoinDropdownPicker = styled(DropDownPicker).attrs({
//   itemProps: {
//     style: {
//       padding: 20,
//     },
//   },
//   containerProps: {
//     style: {
//       margin: 20,
//     },
//   },
//   labelProps: {
//     style: {
//       fontFamily: 'Urbanist-SemiBold',
//     },
//   },
//   dropownContainerStyle: {
//     backgroundColor: 'blue',
//   },
// })``;
