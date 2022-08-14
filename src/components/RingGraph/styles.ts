import styled from 'styled-components/native';
import { Circle } from 'react-native-svg';

export const ProportionedCircle = styled(Circle).attrs({
  cx: '50%',
  cy: '50%',
  fill: 'transparent',
  originX: '90',
  originY: '90',
  strokeLinecap: 'round',
})``;

export default ProportionedCircle;
