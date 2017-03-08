import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import config from "./configReducer"
import test from "./testReducer"
import { i18nReducer as i18n }  from 'react-redux-i18n';


export default combineReducers({
    tweets,
    config,
    test,
    i18n
})
