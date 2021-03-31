const defaultFilesState = [];

export const filesReducer = ((state = defaultFilesState, action) => {
    switch(action.type) {
        case 'ADD_FILE':
            return [...state, action.file]
        case 'REMOVE_FILE':
            return state.filter((file) => (
                action.id !== file.id
            ))
        case 'REMOVE_ALL_FILES':
            return []
        default:
            return state
    }
});
