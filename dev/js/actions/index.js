export const createNewUser = (user) => {
    console.log("You created a new user!");
    return {
        type: 'CREATE_NEW_USER',
        payload: user
    }
};


export const openOneOpp = (opp) => {
    console.log("You have opened one opp!");
    return {
        type: 'OPEN_ONE_OPP',
        payload: opp
    }
};
