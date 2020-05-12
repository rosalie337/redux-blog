export const addEntry = (title, body) => ({
    type: 'ADD_ENTRY',
    payload: {
        title,
        body,
    }
});

