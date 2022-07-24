const initialState = {
    data: null,
    loading: false,
    byID: false,
    byTitle: true,
    byDescr: true,
    inputValue: ''
}

const sort = (sortBy, condition, data) => {
    switch (condition) {
        case 'id':
            if (sortBy) return [...data].sort((a, b) => a.id > b.id ? 1 : -1)
            return [...data].sort((a, b) => b.id > a.id ? 1 : -1)

        case 'title':
            if (sortBy) return [...data].sort((a, b) => a.title > b.title ? 1 : -1)
            return [...data].sort((a, b) => b.title > a.title ? 1 : -1)


        case 'description':
            if (sortBy) return [...data].sort((a, b) => a.body > b.body ? 1 : -1)
            return [...data].sort((a, b) => b.body > a.body ? 1 : -1)

        default:
            break;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: [...action.payload],
            }
        case 'SORT_BY_ID':
            return {
                ...state,
                byID: !state.byID,
                data: sort(state.byID, 'id', state.data)
            }
        case 'SORT_BY_TITLE':
            return {
                ...state,
                byTitle: !state.byTitle,
                data: sort(state.byTitle, 'title', state.data)
            }
        case 'SORT_BY_DESCRIPTION':
            return {
                ...state,
                byDescr: !state.byDescr,
                data: sort(state.byDescr, 'description', state.data)
            }
        case 'INPUT_FIELD':
            return {
                ...state,
                inputValue: action.payload,
            }
        default:
            return state;
    }
}
export default reducer;


