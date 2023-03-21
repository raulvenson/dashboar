import axios from 'axios';

// actions.js

export const submitForm = formData => {
  return dispatch => {
    dispatch({ type: 'SUBMIT_FORM_REQUEST' });
    console.log('DENTRO DO SUBMIT' +formData);
    return axios.post('localhost:8181/api/form', formData)
      .then(response => {
        console.log(response);
        dispatch({ type: 'SUBMIT_FORM_SUCCESS', payload: response.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: 'SUBMIT_FORM_FAILURE', payload: error.message });
      });
  };
};
