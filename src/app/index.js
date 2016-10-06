import Rx from 'rxjs/Rx';
import riot from 'riot';

import { fetchUser, fetchUserEpic, userReducer } from './redux/modules/github';
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import app from './app';
import votercomponent from './components/voter/voter.component';

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

store.dispatch(fetchUser('garethoates'));

store.subscribe(() => {
    console.log(store.getState());
});

let myApp = riot.mount('app')[0];
let voter = riot.mount('voter-component', { voteCount: 34, myVote: 0 })[0];
