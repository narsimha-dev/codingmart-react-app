import { GET_TOKEN } from '../actions/actoinTypes';

const initialState = {
  userDetails: [], // orifginal list
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
   
    case GET_TOKEN:
      return { ...state, userDetails:action.payload};
     default:
      return state;
  }
}