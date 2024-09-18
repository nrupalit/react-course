const redux = require('redux');

const conterReducer = (state = {
    counter: 0
}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    return state;
}

const store = redux.createStore(conterReducer);

const conterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(conterSubscriber);

store.dispatch({ type: 'increment' })