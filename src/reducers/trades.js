import * as trades from '../actions/trades';

const initialState = []

export default (state=initialState, action) => {
  switch(action.type) {
    case trades.TRADES_SUCCESS:
      return {...state, [action.meta.coin]: action.payload};
    default:
      return state
  }
}
