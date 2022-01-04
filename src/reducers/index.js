import { combineReducers } from 'redux';
import {reducerTest, reducerDataWords} from './reducer';
/**
* Import all the created reducers here
* like secondReducer, thirdReducer etc.
*/

const rootReducer = combineReducers({
    reducerTest,
    reducerDataWords
    // List all your reducers
});

export default rootReducer;