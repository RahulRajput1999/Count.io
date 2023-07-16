import { SET_NAME } from "../constants"
import { INPUT_NAME } from "../constants"


export function setName(name) {
    // console.log('setName - '+ name)
    return {
        type: SET_NAME,
        payload: name
    }
}

export function setInputName(name) {
    return {
        type: INPUT_NAME,
        payload: name
    }
}
