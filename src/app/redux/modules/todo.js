const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const updateItems = (payload) => ({ type: UPDATE_ITEMS, payload });

export function todoReducer (state = { todos: ['item 1', 'item 2', 'item 3'] }, action) {
    switch (action.type) {

        case UPDATE_ITEMS:
            return Object.assign({}, state, {
                todos: action.payload.todos
            });

        default:
            return state;
    }
}
