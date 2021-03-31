import { createStore, combineReducers } from 'redux';
import { filesReducer } from '../reducers/files';
import { asistenciasReducer } from '../reducers/asistencias';

export default createStore(combineReducers(
    {
        files: filesReducer,
        asistencias: asistenciasReducer
    }
));



