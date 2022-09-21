import { createSlice } from '@reduxjs/toolkit';

const historyData = [
  {
    type: 'Send',
    time: '12:01 AM',
    coin: 'BTC',
    amount: '$200.00',
    recipient: 'Jerry Jones',
    id: '1',
  },
  {
    type: 'Receive',
    time: '12:02 AM',
    coin: 'ETH',
    amount: '$150.00',
    recipient: 'John Jones',
    id: '2',
  },
  {
    type: 'Send',
    time: '12:03 AM',
    coin: 'SOL',
    amount: '$100.00',
    recipient: 'Jack Jones',
    id: '3',
  },
  {
    type: 'Send',
    time: '12:04 AM',
    coin: 'BTC',
    amount: '$120.00',
    recipient: 'Jonan Jones',
    id: '4',
  },
  {
    type: 'Purchase',
    time: '12:05 AM',
    coin: 'ETH',
    amount: '$130.00',
    id: '5',
  },
  {
    type: 'Purchase',
    time: '12:06 AM',
    coin: 'BTC',
    amount: '$300.00',
    id: '6',
  },
  {
    type: 'Send',
    time: '12:07 AM',
    coin: 'SOL',
    amount: '$50.00',
    recipient: 'Julian Jones',
    id: '7',
  },
  {
    type: 'Purchase',
    time: '12:08 AM',
    coin: 'BTC',
    amount: '$600.00',
    id: '8',
  },
  {
    type: 'Receive',
    time: '12:09 AM',
    coin: 'ETH',
    amount: '$220.00',
    recipient: 'Joshua Jones',
    id: '9',
  },
  {
    type: 'Purchase',
    time: '12:10 AM',
    coin: 'BTC',
    amount: '$170.00',
    id: '10',
  },
  { type: 'Sell', time: '12:11 AM', coin: 'SOL', amount: '$80.00', id: '11' },
  {
    type: 'Purchase',
    time: '12:12 AM',
    coin: 'BTC',
    amount: '$210.00',
    id: '12',
  },
  { type: 'Sell', time: '12:13 AM', coin: 'ETH', amount: '$10.00', id: '13' },
];

type HistoryState = {
  history: {
    historyData: {
      type: string;
      time: string;
      coin: string;
      amount: string;
      recipient?: string;
      id: string;
    }[];
  };
};

const historySlice = createSlice({
  name: 'history',
  initialState: {
    historyData,
  },
  reducers: {},
});

export const selectHistory = (state: HistoryState) => state.history;

export default historySlice.reducer;
