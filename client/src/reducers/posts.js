export const post = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action;
        case 'CREATE':
            return posts;
        default:
            return;
    }
}