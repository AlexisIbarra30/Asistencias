export const addFile = ({id, workbook}) => {
    return({
        type: 'ADD_FILE',
        file: {
            id,
            workbook: file
        }
    });
}

export const removeFile = (id) => {
    return ({
        type: 'REMOVE_FILE',
        id
    })
}

export const removeAllF = () => {
    return ({
        type: 'REMOVE_ALL_FILES'
    })
}
