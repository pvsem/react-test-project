const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'save-news':
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
