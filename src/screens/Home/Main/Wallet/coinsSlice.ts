import { createSlice } from '@reduxjs/toolkit';

// Owned coins

const ownedCoinsData = [
  { id: '1', coinName: 'Solana', dollarAmount: 1000, ownedAmount: 1 },
  { id: '2', coinName: 'Bitcoin', dollarAmount: 1000, ownedAmount: 1 },
  { id: '3', coinName: 'Ethereum', dollarAmount: 1400, ownedAmount: 1 },
  { id: '4', coinName: 'Tether', dollarAmount: 1400, ownedAmount: 1 },
  { id: '5', coinName: 'USDC', dollarAmount: 1400, ownedAmount: 1 },
  { id: '6', coinName: 'Cardano', dollarAmount: 1400, ownedAmount: 1 },
  { id: '7', coinName: 'Polkadot', dollarAmount: 1400, ownedAmount: 1 },
];

type CoinState = {
  ownedCoins: {
    ownedCoinsData: {
      id: string;
      coinName: string;
      dollarAmount: number;
      ownedAmount: number;
    }[];
  };
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    ownedCoinsData,
  },
  reducers: {},
});

export const selectOwnedCoins = (state: CoinState) => state.ownedCoins;

export default coinsSlice.reducer;
