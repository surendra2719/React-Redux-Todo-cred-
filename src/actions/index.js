import types from "../types/index"
export const addInput = (payload) => {
    console.log(`addInput actions`, payload);
    return {
        type: types.ADD_INPUT,
        payload
    };
}
export const deleteInput = (id) => {
    console.log(`deleteInput actions`, id);
    return {
        type: types.DELETE_INPUT,
        id
    };
}
export const updateInput = (payload) => {
    console.log(`update action`, payload)
    return {
        type: types.UPDATE_INPUT,
        payload
    };
}
export const setInput = (payload) => {
    console.log(`setInput action`);
    return {
        type: types.SET_INPUT,
        payload
    }
}