import { combineReducers } from 'redux';
import chartSlice from '@features/Home/Main/Charts/LineChart/chartSlice';
import friendsSlice from '@screens/Home/Main/Friends/friendsSlice';

const rootReducer = combineReducers({
  charts: chartSlice,
  friends: friendsSlice,
});

export default rootReducer;
