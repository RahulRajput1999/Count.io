import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
import nameReducer from '../reducers/nameReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';




const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers(
    { counters: countReducer, name: nameReducer }
);

const persistedReducer = persistReducer(persistConfig, rootReducer)


// const configureStore = () => {
//     return createStore(persistedReducer);
// }

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)
