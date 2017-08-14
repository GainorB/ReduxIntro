// ACTION CYCLE:
// A user performs an event in the browser
    // calls an action creator
        // returns an object
            // has a type that describes the action
            // automatically sent to all the reducers in the application
                // theres a switch statement that switches depending on type of action
                    // return action and update state
                // default case is to return currentState
            // once all reducers process the action the newly assembled state is pumped back into the containers
                // then re-render browser with new data

// Action Creator is just a function that returns an action
    // an action is an object that flows through our reducers
    // reducers use that action to produce a different value for a different state

// now we need to call it when a user clicks on a book
// need to make sure the returned action runs through our reducers
// have to make sure this Action Creator is wired to redux
export function selectBook(book){
    // console.log('A book has been selected:', book.title);

    // selectBook is an action creator and needs to return an action
        // an object with a type property
    return {
        type: 'BOOK_SELECTED', // describes purpose of action
        payload: book
    };
}