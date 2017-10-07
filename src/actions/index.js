import fetch from "isomorphic-fetch";

export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const SELECT_USER = "SELECT_USER";

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user
  };
}

function requestUsers(user) {
  return {
    type: REQUEST_USERS,
    user
  };
}

function receiveUsers(user, json) {
  return {
    type: RECEIVE_USERS,
    user,
    users: json.items.map(item => item),
    total_count: json.total_count,
    receivedAt: Date.now()
  };
}

export function fetchUsers(user, page) {
  let queryString = "?q=" + user + "&page=" + page;
  return function(dispatch) {
    dispatch(requestUsers(user));

    return fetch(
      "https://api.github.com/search/users" + queryString
    )
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(json => dispatch(receiveUsers(user, json)));
  };
}
