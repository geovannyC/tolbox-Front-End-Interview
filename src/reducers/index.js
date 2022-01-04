import { combineReducers } from 'redux';
import {reducerTest, reducerDataWords} from './reducer';

//Almacenamiento de los reducers creados
const rootReducer = combineReducers({
    reducerTest,
    reducerDataWords
 
});

export default rootReducer;