import { STORE_FORM_DATA } from "../actions/types";

export default (oldDataStore = {}, action) => {
    if (action.type === STORE_FORM_DATA){
        return { ...oldDataStore, ...action.payload }
    }

    return oldDataStore;
};