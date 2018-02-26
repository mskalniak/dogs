
import { SEARCH_ACTION } from '../actions/actions';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { searchSuccessAction, searchFailedAction } from '../actions/actions';
import axios from 'axios'

const searchEpic = action$ => action$.ofType(SEARCH_ACTION)
    .map(item => {
        let nameArr = item.payload.split(' ');

        if (nameArr.length === 1)
            return nameArr[0];
        else if (nameArr.length === 2)
            return nameArr[1] + '/' + nameArr[0];
        else
            return item.payload;
    })
    .switchMap(query =>
        axios.get(`https://dog.ceo/api/breed/${query}/images`, { timeout: 10000 })
            .then(x => searchSuccessAction(x.data.message))
            .catch(error => searchFailedAction())
    );

export const rootEpic = combineEpics(
    searchEpic
);