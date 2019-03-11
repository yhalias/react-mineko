import {combineReducers} from 'redux'
import ArticleReducers from './Article'

const allReducers = combineReducers({
    articles: ArticleReducers
});

export default allReducers