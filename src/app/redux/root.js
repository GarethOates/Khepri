import Rx from 'rxjs/Rx';
import { fetchUserEpic, userReducer } from './modules/github';
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const
    epicMiddleware = createEpicMiddleware(fetchUserEpic),

    store = createStore(userReducer,
        compose(applyMiddleware(epicMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store);
}

module.exports = store
