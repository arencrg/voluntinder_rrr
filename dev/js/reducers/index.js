import { combineReducers } from 'redux';
import oppsDataReducer from './reducer_oppsData';
import chosenOppReducer from './reducer_chosenOpp';
import volDataReducer from './reducer_volData';

const allReducers = combineReducers({
    opps: oppsDataReducer,
    user: volDataReducer,
    chosenOpp: chosenOppReducer
});

export default allReducers
