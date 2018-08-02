import * as users from '../actions/users';

const initialState = {
  currentUser: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case users.GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: action.payload};
    default:
      return state
  }
}
