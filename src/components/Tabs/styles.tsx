import styled from 'styled-components/native';
import { Tab } from '@rneui/themed';

export const TabContainerView = styled.View`
  width: 90%;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const TabContainer = styled(Tab).attrs({
  containerStyle: {
    backgroundColor: '#EBEFF1',
  },
  disableIndicator: true,
  scrollable: false,
  variant: 'primary',
})``;

export const TabContainerItem = styled(Tab.Item).attrs(({ active }) => ({
  titleStyle: {
    color: active ? '#404AFF' : '#9395A5',
    fontFamily: 'Urbanist',
    fontSize: 14,
  },
  buttonStyle: {
    borderColor: '#EBEFF1',
    borderWidth: 8,
    backgroundColor: active ? '#FFFFFF' : '#EBEFF1',
    borderRadius: 50,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  containerStyle: {
    backgroundColor: '#EBEFF1',
  },
  variant: 'primary',
}))``;

export const TabContainerItemSmall = styled(Tab.Item).attrs(({ active }) => ({
  titleStyle: {
    color: active ? '#404AFF' : '#9395A5',
    fontFamily: 'Urbanist',
    fontSize: 10,
  },
  buttonStyle: {
    borderColor: '#EBEFF1',
    borderWidth: 8,
    backgroundColor: active ? '#FFFFFF' : '#EBEFF1',
    borderRadius: 50,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  containerStyle: {
    backgroundColor: '#EBEFF1',
  },
  variant: 'primary',
}))``;
