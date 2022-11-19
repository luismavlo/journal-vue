// export const myActions = ( state ) => {

// }


export const setEntries = (state, entries) => {

    state.entries = [...state.entries, ...entries]

    state.isLoading = false;

}


export const updateEntries = (state) => {
    return state;
}


export const addEntries = (state) => {
    return state;
}