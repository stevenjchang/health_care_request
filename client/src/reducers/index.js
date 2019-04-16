import { combineReducers } from 'redux';
import healthForm from './healthForm';
import posts from './posts';

const rootReducer = combineReducers({
  healthForm,
  posts,
});

export default rootReducer;
