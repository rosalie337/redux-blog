import { createStore } from 'redux';
import { reducer } from './reducers/wordsReducer';

const store = createStore(reducer)

console.log(store.getState());

