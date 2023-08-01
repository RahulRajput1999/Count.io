import { SET_NAME } from "../constants";
import { INPUT_NAME } from "../constants";

const initialState = {
    name: "",
    inputName: ""
};

const nameReducer = (state = initialState, action) => {
    // console.log('name reducer - '+ JSON.stringify(action))
    switch (action.type) {
        case SET_NAME: {
            // console.log('SET_NAME Case execute')
            return {
                ...state,
                name: action.payload
            };
        }
        case INPUT_NAME: {
            return {
                ...state,
                inputName: action.payload
            }
        }
        default: 
            return state;
    }
}

export default nameReducer;