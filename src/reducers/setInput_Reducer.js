import types from "../types/index"
let initialSate = {
    currentItem: {
        key: ``,
        text: ``
    }
}
export default (state = initialSate, action) => {
    switch (action.type) {
        case types.SET_INPUT:
            return {
                ...state.currentItem,
                key: action.payload.key,
                text: action.payload.text,
            }
        default: return state;
    }
}