import data from './libraryList.json'

const initialState = {
    list: data,
    selectedLibrary: null
}

const Library = (state = initialState, action) => {

    switch (action.type) {
        case 'LIBRARY_LIST':
            return {
                ...state,
                list: data
            }
        case 'SELECTED_LIBRARY':
            return {
                ...state,
                selectedLibrary: action.payload
            }
        default:
            return state
    }
}

export default Library