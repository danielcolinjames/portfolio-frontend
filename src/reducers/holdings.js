import * as holdings from '../actions/holdings';

const initialState = []

export default (state=initialState, action) => {
  switch(action.type) {
    case holdings.HOLDINGS_SUCCESS:
      return action.payload;
    default:
      return state
  }
}
