const { combineReducers } = require('redux');

function test(state=0,action) {
    return state;
}
function user(state='us',action) {
    return state;
}

const reducer = combineReducers({
    test,
    user
});

export default reducer