import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import first from 'containers/first/reducer';


export default function createReducer(asyncReducers) {
  return combineReducers({
    first,
    routing: routerReducer,
    ...asyncReducers,
  });
}

