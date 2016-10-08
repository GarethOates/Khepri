import Rx from 'rxjs/Rx';
import ajax from 'jquery';

const
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_COMPLETE = 'FETCH_USER_COMPLETE',

    fetchUserComplete = (payload) => ({ type: FETCH_USER_COMPLETE, payload });

export const fetchUser = (username) => ({ type: FETCH_USER, payload: username });

export const fetchUserEpic = action$ =>
    action$.ofType(FETCH_USER)
        .debounceTime(250)
        .mergeMap(action =>
            Rx.Observable.fromPromise(
                ajax.getJSON(`https://api.github.com/users/${action.payload}`)
            )
            .map(fetchUserComplete)
        )

export function userReducer (state = {}, action) {
  switch (action.type) {

    case FETCH_USER_COMPLETE:
        return Object.assign({}, state, {
            [action.payload.login]: action.payload
        })

    default:
      return state;
  }
};
