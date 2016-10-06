import { Observable } from 'rxjs/Observable';
import $ from 'jquery';

const
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_COMPLETE = 'FETCH_USER_COMPLETE',

    fetchUserComplete = (payload) => ({ type: FETCH_USER_COMPLETE, payload }),

    searchGitHub = (username) => {
        let promise = $.ajax(`https://api.github.com/users/${username}`).promise()
        return Observable.fromPromise(promise);
    };

export const fetchUser = (username) => ({ type: FETCH_USER, payload: username });

export const fetchUserEpic = action$ =>
    action$.ofType(FETCH_USER)
        .mergeMap(action =>
            searchGitHub(action.payload)
            .map(fetchUserComplete)
        );

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
