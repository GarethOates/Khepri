import { fetchUserEpic, userReducer } from './modules/github';
import { voteReducer } from './modules/voter';
import { likeReducer } from './modules/like';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const
    epicMiddleware = createEpicMiddleware(fetchUserEpic),

    reducers = {
        user: userReducer,
        vote: voteReducer,
        like: likeReducer
    },

    store = createStore(
        combineReducers(reducers),
        compose(applyMiddleware(epicMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

if (window.devToolsExtension) {
  `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`
}

module.exports = store
