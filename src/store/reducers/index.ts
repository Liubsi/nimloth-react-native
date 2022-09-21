import { combineReducers } from 'redux';
import chartSlice from '@features/Home/Main/Charts/LineChart/chartSlice';
import friendsSlice from '@screens/Home/Main/Friends/friendsSlice';
import historySlice from '@screens/Home/Main/TransactionHistory/historySlice';

const rootReducer = combineReducers({
  charts: chartSlice,
  friends: friendsSlice,
  history: historySlice,
});

export default rootReducer;
