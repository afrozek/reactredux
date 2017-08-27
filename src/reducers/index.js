import { combineReducers } from 'redux';
import UsersReducer from './user.reducer'

const rootReducer = combineReducers({
    users: UsersReducer
});

export default rootReducer;