import { combineReducers } from 'redux';
import chartSlice from '@features/Home/Main/Charts/LineChart/chartSlice';
import friendsSlice from '@screens/Home/Main/Friends/friendsSlice';
import historySlice from '@screens/Home/Main/TransactionHistory/historySlice';
import coinsSlice from '@screens/Home/Main/Wallet/coinsSlice';

const rootReducer = combineReducers({
  charts: chartSlice,
  friends: friendsSlice,
  history: historySlice,
  ownedCoins: coinsSlice,
});

export default rootReducer;
