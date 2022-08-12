import styled from 'styled-components/native';
import { Tab } from '@rneui/themed';

export const TabContainerView = styled.View`
  border-radius: 50px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const TabContainer = styled(Tab).attrs({
  containerStyle: {
    backgroundColor: '#EBEFF1',
  },
  disableIndicator: true,
  variant: 'primary',
})``;

export const TabContainerItem = styled(Tab.Item).attrs({
  containerStyle: {
    backgroundColor: '#EBEFF1',
  },
  variant: 'primary',
})``;
