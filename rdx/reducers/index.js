import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import test from "./testReducer"


export default combineReducers({
  tweets,
  test
})
