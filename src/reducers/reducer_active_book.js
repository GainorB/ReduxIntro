// all reducers get two arguments
    // current state and action
    // only called when an action occurs
// state argument is not application state, only the state this reducer is responsible for
    // same state flows into

// when application first starts and no book is selected, it will return state but state will be undefined
    // must always return a non undefined value
    // default state to null
// make sure to never mutate state

// by default Redux sends an action through all reducers
    // therefore we return state, but state will always be null
    // which means our component will render a null value

// our application state is formed by our reducers
    // changes by the type of action that was received
export default function(state = null, action){
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    // if we don't care about the action, just return state
    return state;
}