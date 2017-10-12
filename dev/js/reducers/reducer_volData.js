// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = null, action) {
    switch (action.type) {
        case 'NEW_USER_CREATED':
            return action.payload;
            break;
    }
    return state;
}
