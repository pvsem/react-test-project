import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/newsReducer';
import thunk from 'redux-thunk';

export const store = createStore(reducer, [], applyMiddleware(thunk));
