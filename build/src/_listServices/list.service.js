import config from 'config';
import {authHeader} from '../_helpers';

const FormData = require('form-data');

export const listService = {
  listRegister,
  getAll,
  update
};

function listRegister(list) {

  const formData = new FormData($('#upload-file')[0]);

  const requestOptions = {
    method: 'POST',
    body: formData
    // body: JSON.stringify(list)
  };
  return fetch(`${config.apiUrl}/api/image`, requestOptions).then(handleResponse);
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch(`${config.apiUrl}/api/lists`, requestOptions).then(handleResponse);
}

function update(list) {

  const formData = new FormData($('#upload-file')[0]);
  console.log(list);
  const requestOptions = {
    method: 'POST',
    body: formData
  };

  return fetch(`${config.apiUrl}/api/lists/${list.id}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        //logout();
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

