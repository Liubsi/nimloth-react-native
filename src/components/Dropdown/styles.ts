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
  background-color: #f3f5f6;
  height: 500%;
`;

export const DropdownPressable = styled(Button).attrs({
  type: 'solid',
  iconPosition: 'left',
  buttonStyle: {
    borderRadius: 50,
    height: 45,
    backgroundColor: '#FFFFFF',
  },
  titleStyle: {
    color: '#000000',
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
  color: '#000000',
  size: 20,
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})``;

export const ChevronUp = styled(Icon).attrs({})``;
