import Rx from 'rxjs/Rx';
import riot from 'riot';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ping, pingEpic, pingReducer } from './redux/modules/ping';

const
    epicMiddleware = createEpicMiddleware(pingEpic),
    store = createStore(pingReducer, applyMiddleware(epicMiddleware)),
    isPinging = store.getState().isPinging;

store.dispatch(ping());

store.subscribe(() => {
    console.log(store.getState());
});
