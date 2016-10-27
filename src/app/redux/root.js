import { fetchUserEpic, userReducer } from './modules/github';
import { voteReducer } from './modules/voter';
import { likeReducer } from './modules/like';
import { todoReducer } from './modules/todo';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const
    epicMiddleware = createEpicMiddleware(fetchUserEpic),

    reducers = {
        user: userReducer,
        vote: voteReducer,
        like: likeReducer,
        todos: todoReducer
    }

    store = createStore(
        combineReducers(reducers),
        compose(applyMiddleware(epicMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store);
}

module.exports = store
