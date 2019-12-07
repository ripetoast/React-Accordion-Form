import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataStoreReducer from "./dataStoreReducer";

export default combineReducers({
    form: formReducer,
    currentFormData: dataStoreReducer
});