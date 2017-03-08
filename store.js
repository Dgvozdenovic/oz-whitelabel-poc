import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import logger from "redux-logger"
import reducer from "./rdx/reducers"
import translationsObject from "./assets/localization"

const middleware = applyMiddleware(thunkMiddleware, logger())

export const initStore = (initialState) => {
    const store = createStore( reducer, initialState, middleware);
    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translationsObject));
    store.dispatch(setLocale('en'));
    return store;
}
