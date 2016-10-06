import Rx from 'rxjs/Rx';
import { fetchUserEpic, userReducer } from './modules/github';
import { voteReducer } from './modules/voter';
import { likeReducer } from './modules/like';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const
    epicMiddleware = createEpicMiddleware(fetchUserEpic),

    store = createStore(
        combineReducers(
            {
                user: userReducer,
                vote: voteReducer,
                like: likeReducer
            }),
        compose(applyMiddleware(epicMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store);
}

module.exports = store
