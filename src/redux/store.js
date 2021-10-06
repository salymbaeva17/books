import {createStore, combineReducers, applyMiddleware} from "redux"
import {cartReducer} from "./reducers/cartReducer"
import {catalogReducer} from "./reducers/catalogReducer"
import {composeWithDevtools} from "redux-devtools-extension"
import thunk from "redux-thunk"

export const store = createStore(combineReducers({
    cart: cartReducer,
    catalog: catalogReducer
}), composeWithDevtools(applyMiddleware(thunk)))