
import { SEARCH_ACTION } from '../actions/actions';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { searchSuccessAction, searchFailedAction } from '../actions/actions';
import axios from 'axios'

const searchEpic = action$ => action$.ofType(SEARCH_ACTION)
    .switchMap(item => 
        axios.get(`https://dog.ceo/api/breed/${item.payload}/images`, { timeout: 5000 })
        .then(x => searchSuccessAction(x.data.message))
        .catch(error => searchFailedAction())
    );

export const rootEpic = combineEpics(
    searchEpic
);