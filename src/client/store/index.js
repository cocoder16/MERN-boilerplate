import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import post from './post';

const store = createStore(combineReducers({
    post
}), applyMiddleware(thunk));

store.subscribe(() => {
    console.log("Store Updated", store.getState());
});

export default store;