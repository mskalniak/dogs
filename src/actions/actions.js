export const SEARCH_ACTION = 'SEARCH_ACTION';
export const CHANGE_SEARCH_TEXT_ACTION = 'CHANGE_SEARCH_TEXT_ACTION';
export const SEARCH_SUCCESS_ACTION = 'SEARCH_SUCCESS_ACTION';
export const SEARCH_FAILED_ACTION = 'SEARCH_FAILED_ACTION';
export const CHANGE_CURRENT_PHOTO_ACTION = 'CHANGE_CURRENT_PHOTO_ACTION';

export function searchAction(payload) {
    return {
        type: SEARCH_ACTION,
        payload
    }
}

export function changeSearchTextAction(payload) {
    return {
        type: CHANGE_SEARCH_TEXT_ACTION,
        payload
    }
}

export function searchSuccessAction(payload) {
    return {
        type: SEARCH_SUCCESS_ACTION,
        payload
    }
}

export function searchFailedAction(payload) {
    return {
        type: SEARCH_FAILED_ACTION,
        payload
    }
}

export function changeCurrentPhotoAction(payload) {
    return {
        type: CHANGE_CURRENT_PHOTO_ACTION,
        payload
    }
}