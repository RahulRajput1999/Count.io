import { COUNTER_CHANGE } from '../constants';
import { ADD_COUNTER } from '../constants';
import { DELETE_COUNTER } from '../constants';
import { INC_COUNTER } from '../constants';
import { DEC_COUNTER } from '../constants';
import { RESET_COUNTER } from '../constants';

export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}

export function addCounter(counter) {
    return {
        type: ADD_COUNTER,
        payload: counter
    }
}

export function deleteCounter (counterID) {
    return {
        type: DELETE_COUNTER,
        payload: counterID
    }
}

export function incCounter(counterID) {
    return {
        type: INC_COUNTER,
        payload: counterID
    }
}

export function decCounter(counterID) {
    return {
        type: DEC_COUNTER,
        payload: counterID
    }
}

export function resetCounter(counterID) {
    return {
        type: RESET_COUNTER,
        payload: counterID
    }
}