import { combineReducers } from 'redux';
import oppsDataReducer from './reducer_oppsData';
import chosenOppReducer from './reducer_chosenOpp';
import volDataReducer from './reducer_volData';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    opps: oppsDataReducer,
    user: volDataReducer,
    chosenOpp: chosenOppReducer
});

export default allReducers
