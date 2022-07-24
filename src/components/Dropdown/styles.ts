import styled from 'styled-components/native';
import { Icon, Button } from '@rneui/themed';

export const DropdownContainer = styled.View`
  height: auto;
`;

export const DropdownListContainer = styled.View`
  position: absolute;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  top: 70px;
  background-color: blue;
`;

export const DropdownPressable = styled(Button).attrs({
  type: 'solid',
  iconPosition: 'left',
  containerStyle: {
    margin: 20,
  },
  buttonStyle: {
    borderRadius: 50,
    height: 45,
    backgroundColor: '#404AFF',
  },
  titleStyle: {
    color: '#FFFFFF',
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
