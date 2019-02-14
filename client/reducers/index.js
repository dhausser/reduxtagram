import { combineReducers } from 'redux';
import { routerReducers } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments, router: routerReducers });

export default rootReducer;