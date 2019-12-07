import axios from "axios";
import { FETCH_FORM } from "./types";
import { STORE_FORM_DATA } from "./types";

export const storeFormData = (data) => async dispatch => {
    await dispatch({ type: STORE_FORM_DATA, payload: data});
};