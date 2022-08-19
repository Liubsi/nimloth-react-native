import React from 'react';
import { line, curveBasis } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';
import Animated from 'react-native-reanimated';
import { G, Line, Path, Svg } from 'react-native-svg';
import addDays from '@common/utils/addDays';
import { WINDOW_WIDTH } from '@common/constants/screen-constants';

type DataPoint = {
  date: string;
  value: number;
};

type GraphData = {
  yMax: number;
  yMin: number;
  curve: string;
};

type LineChartProps = {
  height: number;
  width: number;
  data: GraphData[];
  bottomPadding: number;
};

const currentDate = new Date(2000, 1, 1);

const DAY = 1;
const WEEK = 7;
const MONTH = 30;
const YEAR = 365;
const FIVE_YEARS = 5 * YEAR;

export const makeGraph = (data: DataPoint[]) => {
  const yMax = Math.max(...data.map(({ value }) => value));
  const yMin = Math.min(...data.map(({ value }) => value));
  console.log(yMax, yMin);
  const yAxis = scaleLinear().domain([yMin, yMax]).range([230, 0]);

  const xAxis = scaleTime()
    .domain([currentDate, addDays(currentDate, MONTH)])
    .range([10, WINDOW_WIDTH]);

  const curvedLine = line<DataPoint>()
    .x(({ date }) => xAxis(new Date(date)))
    .y(({ value }) => yAxis(value))
    .curve(curveBasis)(data);

  return {
    yMax,
    yMin,
    curve: curvedLine!,
  };
};

const LineChart = ({ height, width, data, bottomPadding }: LineChartProps) => {
  return (
    <Animated.View>
      <Svg width={width} height={height} stroke='black'>
        <G y={-bottomPadding}>
          <Line
            x1={0}
            y1={height}
            x2={width}
            y2={height}
            stroke='#d7d7d7'
            strokeWidth='1'
          />
          <Line
            x1={0}
            y1={height * 0.6}
            x2={width}
            y2={height * 0.6}
            stroke='#d7d7d7'
            strokeWidth='1'
          />
          <Line
            x1={0}
            y1={height * 0.2}
            x2={width}
            y2={height * 0.2}
            stroke='#d7d7d7'
            strokeWidth='1'
          />
          <Path d={data[0].curve} strokeWidth='2' />
        </G>
      </Svg>
    </Animated.View>
  );
};

export default LineChart;
