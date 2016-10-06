const UPDATE_VOTE = 'UPDATE_VOTE';

export const updateVote = (payload) => ({ type: UPDATE_VOTE, payload });

export function voteReducer (state = { voteCount: 34, myVote: 0 }, action) {
    switch (action.type) {

        case UPDATE_VOTE:
            return Object.assign({}, state, {
                voteCount: action.payload.voteCount,
                myVote: action.payload.myVote
            })

        default:
            return state;
    }
};
