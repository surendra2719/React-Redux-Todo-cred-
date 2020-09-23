
import types from "../types/index"
const initialState = {
    items: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_INPUT:
            // Initially check state and concat states with previous states 
            return state && state.length > 0 ? [...state, ...action.payload] : action.payload;
        //Deleting items of object based id
        case types.DELETE_INPUT:
            if (state && state.length > 0) {
                var deleteUpdate = state.filter(data => data.key !== action.id)
                return [...deleteUpdate];
            }
            break;
        // editing and updating text based on comparing key 
        case types.UPDATE_INPUT:
            var { text, key } = action.payload;
            if (state && state.length > 0) {
                var updateInput = state;
                state.map(data => {
                    if (data.key === key) { data.text = text; }
                    return null;
                })
                return [...updateInput];
            }
            break;
        default:
            return state;
    }

}