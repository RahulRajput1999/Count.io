import { COUNTER_CHANGE, DELETE_COUNTER, RESET_COUNTER } from '../constants';
import { ADD_COUNTER } from '../constants';
import { INC_COUNTER } from '../constants';
import { DEC_COUNTER } from '../constants';

const initialState = {
    counters: [
        {
            id: 1,
            name: "Default",
            desc: "Default counter for the app",
            count: 1
        }
    ]
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                counters: [...state.counters, { id: action.payload.id, name: action.payload.name, desc: action.payload.desc, count: 0 }]
            };
        case DELETE_COUNTER:
            return {
                ...state,
                counters: state.counters.filter(counter => counter.id !== action.payload)
            };
        case INC_COUNTER:
            return {
                ...state,
                counters: state.counters.map(
                    counter => counter.id === action.payload ? { ...counter, count: counter.count + 1 } : counter
                )
            };
        case DEC_COUNTER:
            return {
                ...state,
                counters: state.counters.map(
                    counter => counter.id === action.payload ? { ...counter, count: counter.count - 1 } : counter
                )
            };
        case RESET_COUNTER:
            return {
                ...state,
                counters: state.counters.map(
                    counter => counter.id === action.payload ? { ...counter, count: 0 } : counter
                )
            }

        default:
            return state;
    }
}
export default countReducer;