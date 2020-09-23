import types from "../types/index"
// Action for add input
export const addInput = (payload) => {
    return {
        type: types.ADD_INPUT,
        payload
    };
}
// Action for delete input

export const deleteInput = (id) => {
    return {
        type: types.DELETE_INPUT,
        id
    };
}
// Action for update input
export const updateInput = (payload) => {
    return {
        type: types.UPDATE_INPUT,
        payload
    };
}
// Action for set input input
export const setInput = (payload) => {
    return {
        type: types.SET_INPUT,
        payload
    }
}