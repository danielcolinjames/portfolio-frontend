import * as totals from '../actions/totals';

const initialState = []

export default (state=initialState, action) => {
  switch(action.type) {
    case totals.TOTALS_SUCCESS:
      return action.payload;
    default:
      return state
  }
}
