import { Rx } from 'rxjs/Rx';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ping, pingEpic, pingReducer } from './redux/modules/ping';

const epicMiddleware = createEpicMiddleware(pingEpic);
const store = createStore(pingReducer, applyMiddleware(epicMiddleware));

const renderApp = () => {
      const isPinging = store.getState().isPinging;
      store.dispatch(ping());
};

store.subscribe(() => {
    console.log(store.getState());
});
renderApp();
