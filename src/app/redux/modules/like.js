const LIKE = 'LIKE';

export const like = (payload) => ({ type: LIKE, payload });

export function likeReducer (state = { noOfLikes: 15, isLiked: false }, action) {
    switch (action.type) {

        case LIKE:
            return Object.assign({}, state, {
                noOfLikes: action.payload.noOfLikes,
                isLiked: action.payload.isLiked
            })

        default:
            return state;
    }
};
