import Rx from 'rxjs/Rx';
import $ from 'jquery';

const
    FETCH_USER = 'FETCH_USER',
    GET_USER = 'GET_USER',
    FETCH_USER_COMPLETE = 'FETCH_USER_COMPLETE',

    fetchUserComplete = (payload) => ({ type: FETCH_USER_COMPLETE, payload });

export const fetchUser = (username) => ({ type: FETCH_USER, payload: username });
export const getUser = (username) => ({ type: GET_USER, payload: username });

export const fetchUserEpic = action$ =>
    action$.ofType(FETCH_USER)
        .debounceTime(500)
        .mergeMap(action =>
            Rx.Observable.fromPromise(
                $.getJSON(`https://api.github.com/users/${action.payload}`)
            ).onErrorResumeNext()
            .map(fetchUserComplete)
        )
export const getUserEpic = action$ =>
    action$.ofType(GET_USER)
        .debounceTime(500)
        .mergeMap(action =>
            Rx.Observable.fromPromise(
                $.getJSON(`https://api.github.com/users/${action.payload}`)
            ).onErrorResumeNext()
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
