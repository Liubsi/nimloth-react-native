import React from 'react';
import Svg, { G } from 'react-native-svg';
import { Text } from '@rneui/themed';
import { ProportionedCircle } from './styles';

const radius = 65;
const borderTest = 10;
const circleCircumference = 2 * Math.PI * radius;
const colors = ['#FFA41B', '#1BFF32', '#F11BFF', '#FF1B1B', '#404AFF'];

type Props = {
  coins: { coinName: string; dollarAmount: number }[];
};

const RingGraph = ({ coins }: Props) => {
  const colors = Array.from(
    { length: coins.length },
    () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );

  const renderProportions = () => {
    const coinTotal = coins.reduce((acc, curr) => acc + curr.dollarAmount, 0);
    if (coinTotal === 0) {
      return <ProportionedCircle r={radius} strokeWidth={borderTest} />;
    }

    return coins.map(({ coinName, dollarAmount }, index) => {
      const prevDollarAmount = index > 0 ? coins[index - 1].dollarAmount : 0;
      const coinPercentage = (dollarAmount / coinTotal) * 100;
      const coinAngle = (prevDollarAmount / coinTotal) * 360;
      const coinStrokeDashOffset =
        (circleCircumference - circleCircumference * coinPercentage) / 100;
      const coinRotation = index === 0 ? 0 : coinAngle;
      return (
        <ProportionedCircle
          key={coinName}
          r={radius}
          stroke={colors[index]}
          strokeWidth={borderTest}
          strokeDasharray={circleCircumference * coinPercentage}
          strokeDashoffset={coinStrokeDashOffset}
          rotation={coinRotation}
        />
      );
    });
  };

  return (
    <Svg height='100%' width='100%' viewBox='0 0 180 180'>
      <G rotation={-90} originX='90' originY='90'>
        {renderProportions()}
      </G>
    </Svg>
  );
};
export default RingGraph;
