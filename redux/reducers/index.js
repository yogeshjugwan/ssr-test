import { combineReducers } from "redux";

import testSsr from "./testSsr.reducer";
const combineReducer = combineReducers({
    testSsr: testSsr
})
export default combineReducer