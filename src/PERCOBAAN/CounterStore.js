import {createStore} from 'redux';
import counterReducer from './CounterRedux';

export const store = createStore(counterReducer);