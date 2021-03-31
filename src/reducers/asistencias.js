const defaultAsistenciasState = [];

const asistenciasReducer = ((state = defaultAsistenciasState, action) => {
    switch(action.type) {
        case 'ADD_ASISTENCIA':
            return [...state, action.asistencia]
        case 'REMOVE_ASISTENCIA':
            return state.filter((asistencia) => (
                asistencia[0] !== action.id
            ))
        case 'REMOVE_ALL_ASISTENCIAS':
            return []
        default:
            return state
    }
});