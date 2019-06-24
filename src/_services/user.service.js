/* eslint-disable no-unused-vars */

import { authHeader } from "../_helpers";
import Api from "./../_helpers/api";

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  return Api.post(`/users/authenticate`, {
    username,
    password
  })
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getAll() {
  let authToken = {
    headers: authHeader()
  };
  return Api.get(`/users`, authToken).then(handleResponse);
}

function getById(id) {
  let authToken = {
    headers: authHeader()
  };
  return Api.get(`/users/${id}`, authToken).then(handleResponse);
}

function register(user) {
  return Api.post(`/users/register`, user).then(handleResponse);
}

function update(user) {
  let authToken = {
    headers: authHeader()
  };
  return Api.put(`/users${user.id}`, user, authToken).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return Api.delete(`/users/${id}`, authHeader).then(handleResponse);
}

function handleResponse(response) {
  if (response.status !== 200) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }
    const error = response.status && response.statusText;
    return Promise.reject(error);
  }
  return response.data;
}
