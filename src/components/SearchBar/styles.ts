import styled from 'styled-components';
import { Input, Icon } from '@rneui/themed';

export const XIcon = styled(Icon).attrs({
  type: 'font-awesome',
  name: 'times',
  size: 14,
  color: '#C7C7CD',
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 20,
    width: 20,
    backgroundColor: 'grey',
  },
})``;

export const StyledInput = styled(Input).attrs({
  leftIcon: {
    type: 'font-awesome',
    name: 'search',
    size: 14,
  },
  leftIconContainerStyle: {
    backgroundColor: 'white',
    paddingLeft: 20,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  rightIconContainerStyle: {
    backgroundColor: 'white',
    paddingRight: 20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  inputStyle: {
    textAlign: 'center',
    fontSize: 14,
  },
})``;
