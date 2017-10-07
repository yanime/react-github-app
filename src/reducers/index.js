import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { RECEIVE_USERS, REQUEST_USERS, SELECT_USER } from "../actions";

function selectedUser(state = "", action) {
    switch (action.type) {
        case SELECT_USER:
            return action.user;
        default:
            return state;
    }
}

function users(
    state = {
        isFetching: false,
        items: [],
        total_count: 0
    },
    action
) {
    switch (action.type) {
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.users,
                total_count: action.total_count,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function usersByUsername(state = {}, action) {
    switch (action.type) {
        case REQUEST_USERS:
        case RECEIVE_USERS:
            return Object.assign({}, state, users(state[action.user], action));
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedUser,
    usersByUsername,
    routing: routerReducer
});

export default rootReducer;
