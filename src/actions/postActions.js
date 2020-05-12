const ADD_ENTRY = 'ADD_ENTRY';

export const addEntry = (title, body) => ({

    type: ADD_ENTRY,
    payload: {
        title,
        body,
    }
});

