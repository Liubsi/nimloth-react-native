import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { line, curveBasis } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';
import { Text, Icon } from '@rneui/themed';
import Animated from 'react-native-reanimated';
import { G, Line, Path, Svg } from 'react-native-svg';
import addDays from '@common/utils/addDays';
import { WINDOW_WIDTH } from '@common/constants/screen-constants';
import { setCurrentPrice, selectChartsState } from './chartSlice';

type DataPoint = {
  date: string;
  value: number;
};

type LineChartProps = {
  lineData: DataPoint[];
  bottomPadding: number;
};

type GraphData = {
  yMax: number;
  yMin: number;
  curve: string;
};

const currentDate = new Date(2000, 1, 1);

const DAY = 1;
const WEEK = 7;
const MONTH = 30;
const YEAR = 365;
const FIVE_YEARS = 5 * YEAR;

const LineChart = ({ bottomPadding, lineData }: LineChartProps) => {
  const dispatch = useDispatch();
  const { currentPrice } = useSelector(selectChartsState);

  const makeGraph = (): GraphData => {
    const yMax = Math.max(...lineData.map(({ value }) => value));
    const yMin = Math.min(...lineData.map(({ value }) => value));
    const yRange = scaleLinear().domain([yMin, yMax]).range([230, 0]);
    const xRange = scaleTime()
      .domain([currentDate, addDays(currentDate, MONTH)])
      .range([10, WINDOW_WIDTH]);

    dispatch(setCurrentPrice(lineData[lineData.length - 1].value));
    const curvedLine = line<DataPoint>()
      .x(({ date }) => xRange(new Date(date)))
      .y(({ value }) => yRange(value))
      .curve(curveBasis)(lineData);

    return {
      yMax,
      yMin,
      curve: curvedLine!,
    };
  };

  const graphData: GraphData = useMemo(() => {
    return makeGraph();
  }, [lineData]);

  return (
    <Animated.View>
      <Svg width='100%' height='100%' stroke='black'>
        <G y={-bottomPadding}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon type='font-awesome' name='square' size={24} />
              <Text style={{ marginLeft: 10, fontSize: 18 }}>
                Premium shit coin
              </Text>
            </View>
            <Text style={{ fontSize: 18 }}>${currentPrice}</Text>
          </View>
          <Line
            x1={0}
            y1='100%'
            x2='150%'
            y2='100%'
            stroke='#d7d7d7'
            strokeWidth='1'
          />
          <Line
            x1={0}
            y1='70%'
            x2='150%'
            y2='70%'
            stroke='#d7d7d7'
            strokeWidth='1'
          />
          <Line
            x1={0}
            y1='40%'
            x2='150%'
            y2='40%'
            stroke='#d7d7d7'
            strokeWidth='1'
          />
          <Path d={graphData.curve} strokeWidth='2' />
        </G>
      </Svg>
    </Animated.View>
  );
};

export default LineChart;
