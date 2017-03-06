import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import config from "./configReducer"
import test from "./testReducer"


export default combineReducers({
  tweets,
  config,
  test
})
