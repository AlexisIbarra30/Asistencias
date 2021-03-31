export const addAsistencia = ({id,asistencia}) => {
    return({
        type: 'ADD_ASISTENCIA',
        file: {
            id,
            asistencia
        }
    });
}

export const removeAsistencia = (id) => {
    return ({
        type: 'REMOVE_ASISTENCIA',
        id
    })
}

export const removeAllA = () => {
    return ({
        type: 'REMOVE_ALL_ASISTENCIAS',
    })
}