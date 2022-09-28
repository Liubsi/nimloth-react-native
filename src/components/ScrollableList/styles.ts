import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { ListItem } from '@rneui/themed';
import { DatumProps } from '@common/types';

export const StyledFlatList = styled(
  FlatList as new (props: FlatListProps<DatumProps>) => FlatList<DatumProps>
)`
  flex: 1;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const StyledListItemTitle = styled(ListItem.Title)`
  font-family: Urbanist;
  font-size: 14px;
  margin-left: 20px;
  margin-right: 20px;
`;
