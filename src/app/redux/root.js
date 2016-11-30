import { fetchUserEpic, getUserEpic, userReducer } from './modules/github';
import { voteReducer } from './modules/voter';
import { likeReducer } from './modules/like';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

const
    rootEpic = combineEpics(
        fetchUserEpic
    ),
    epicMiddleware = createEpicMiddleware(rootEpic),

    reducers = {
        user: userReducer,
        vote: voteReducer,
        like: likeReducer
    },

    store = createStore(
        combineReducers(reducers),
        compose(applyMiddleware(createEpicMiddleware(rootEpic)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

if (window.devToolsExtension) {
  `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`
}

module.exports = store
