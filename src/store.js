import { createStore, applyMiddleware, combineReducers } from 'redux';
import { hnReducer } from './reducers';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    form: formReducer,
    hnData: hnReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
