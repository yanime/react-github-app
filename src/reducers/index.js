import {combineReducers} from 'redux'
import {
    RECEIVE_USERS,
    REQUEST_USERS,
    SELECT_USER
} from '../actions'

function selectedUser(state = '', action) {
    switch (action.type) {
        case SELECT_USER:
            return action.user;
        default:
            return state
    }
}

function users(state = {
                   isFetching: false,
                   items: []
               },
               action) {
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
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

function usersByUsername(state = {}, action) {
    switch (action.type) {
        case REQUEST_USERS:
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                [action.user]: users(state[action.user], action)
            });
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedUser,
    usersByUsername
});

export default rootReducer