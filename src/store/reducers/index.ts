import { combineReducers } from 'redux';
import chartSlice from '@features/Home/Main/Charts/LineChart/chartSlice';
import friendsSlice from '@screens/Home/Main/Friends/friendsSlice';
import historySlice from '@screens/Home/Main/TransactionHistory/historySlice';
import coinsSlice from '@screens/Home/Main/Wallet/coinsSlice';
import signUpSlice from '@screens/Auth/SignUp/signUpSlice';

const rootReducer = combineReducers({
  charts: chartSlice,
  friends: friendsSlice,
  history: historySlice,
  ownedCoins: coinsSlice,
  signUp: signUpSlice,
});

export default rootReducer;
