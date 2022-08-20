/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type ChartsState = {
  charts: {
    isLoading: boolean;
    isError: boolean;
    currentPrice: number | null;
    currentPriceDate: string | null;
  };
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    isLoading: true,
    isError: false,
    currentPrice: null,
    currentPriceDate: null,
  },
  reducers: {
    resetChartsState(state) {
      state.isLoading = true;
      state.isError = false;
      state.currentPrice = null;
      state.currentPriceDate = null;
    },
    setCurrentPrice(state, { payload }) {
      state.currentPrice = payload;
    },
  },
});

export const selectChartsState = (state: ChartsState) => state.charts;

export const { resetChartsState, setCurrentPrice } = chartsSlice.actions;

export default chartsSlice.reducer;
