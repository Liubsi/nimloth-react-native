import { combineReducers } from 'redux';
import chartSlice from '@features/Home/Main/Charts/LineChart/chartSlice';

const rootReducer = combineReducers({
  charts: chartSlice,
});

export default rootReducer;
