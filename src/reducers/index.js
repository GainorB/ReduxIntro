import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// this maps our state
// telling redux how to create application state
// adds a key to our global application state object
// reducer is responsible for creating a specific peice of state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;