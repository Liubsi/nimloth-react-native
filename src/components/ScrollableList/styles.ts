import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ListItem } from '@rneui/themed';

export const StyledFlatList = styled(FlatList)`
  flex: 1;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const StyledListItemTitle = styled(ListItem.Title)`
  font-family: Urbanist;
  font-size: 14;
  margin-left: 20;
  margin-right: 20;
`;
