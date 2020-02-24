import axios from 'axios';
import { GET_TOKEN, USER_ERROR_RECEIVE } from './actoinTypes';


function getToken(userDetails) {
  return {
    type: GET_TOKEN,
    payload:userDetails
     }
}
// throw error message 
function handelError(error) {
  return {
    type: USER_ERROR_RECEIVE,
    errorMessage: "User Details information is not load, please try again...",
    color: 'danger',
    showAlert: false
  }
}

// calling component 
export function getUserToken(data) {
  const headers={"content-type": "application/json"}
  return dispatch => {
   return axios.post(`http://localhost:2020/api/auth/user/signin`, headers, { data })
               .then(response => dispatch(getToken(response.data)))
               .catch(error => dispatch(handelError(error)))
  }
}