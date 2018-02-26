
import {
    CHANGE_SEARCH_TEXT_ACTION,
    SEARCH_SUCCESS_ACTION,
    SEARCH_ACTION,
    SEARCH_FAILED_ACTION,
    CHANGE_CURRENT_PHOTO_ACTION
} from '../actions/actions';

const initialState = {
    searchText: '',
    searchPerformed: false,
    isLoading: false,
    searchError: false,
    dogs: [],
    currentPhoto: null,
    isPhotoModalOpen: false
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ACTION: {
            return Object.assign({}, state, {
                isLoading: true
            })
        }
        case SEARCH_FAILED_ACTION: {
            return Object.assign({}, state, {
                dogs: [],
                searchPerformed: true,
                isLoading: false,
                searchError: true
            })
        }
        case SEARCH_SUCCESS_ACTION: {
            if (Array.isArray(action.payload)) {
                return Object.assign({}, state, {
                    dogs: action.payload,
                    searchPerformed: true,
                    isLoading: false,
                    searchError: false
                })
            }
            else {
                return Object.assign({}, state, {
                    dogs: [],
                    searchPerformed: true,
                    isLoading: false,
                    searchError: false
                })
            }
        }
        case CHANGE_SEARCH_TEXT_ACTION: {
            return Object.assign({}, state, {
                searchText: action.payload
            })
        }
        case CHANGE_CURRENT_PHOTO_ACTION: {
            let isModalOpen = false;
            if(action.payload)
                isModalOpen = true;

            return Object.assign({}, state, {
                currentPhoto: action.payload,
                isPhotoModalOpen: isModalOpen
            })
        }

        default:
            return state;
    }
}