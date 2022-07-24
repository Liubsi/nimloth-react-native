import styled from 'styled-components/native';
import { Icon, Button } from '@rneui/themed';

export const DropdownContainer = styled.View``;

export const DropdownPressable = styled(Button).attrs({
  type: 'solid',
  containerStyle: {
    margin: 20,
  },
  buttonStyle: {
    borderRadius: 50,
    height: 45,
    backgroundColor: '#404AFF',
  },
})``;

export const DropdownLabelContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
  margin-left: 20px;
`;

export const ChevronDown = styled(Icon).attrs({
  type: 'font-awesome',
  name: 'chevron-down',
  color: '#FFFFFF',
  size: 10,
})``;

export const ChevronUp = styled(Icon).attrs({})``;
