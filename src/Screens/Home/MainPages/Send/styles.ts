import styled from 'styled-components/native';
import { Button, Input } from '@rneui/themed';

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
    // borderRadius: 100,
    // borderWidth: 0.5,
    // borderColor: '#CED0DE',
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
  containerStyle: {
    margin: 20,
  },
  buttonStyle: {
    height: 45,
    borderRadius: 50,
    backgroundColor: '#404AFF',
  },
})``;

// TODO: move to a different folder, the Friends page uses this component as well
// TODO: Add search bar icon

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
