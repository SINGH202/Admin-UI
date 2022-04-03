import {
    GET_ADMIN_DATA,
    SEARCH_DATA,
    EDIT_ADMIN_DATA,
    DELETE_SINGLE_DATA,
    DELETE_MULTIPLE_DATA,
    SET_PAGE,
} from './ActionTypes.js';

export const getAdminData = (payload) => ({
    type: GET_ADMIN_DATA,
    payload,
})

export const searchData = (payload) => ({
    type: SEARCH_DATA,
    payload,
})

export const editAdminData = (payload) => ({
    type: EDIT_ADMIN_DATA,
    payload,
})

export const deleteSingleData = (payload) => ({
    type: DELETE_SINGLE_DATA,
    payload,
})

export const deleteMultipleData = (payload) => ({
    type: DELETE_MULTIPLE_DATA,
    payload,
})

export const setPage = (payload) => ({
    type: SET_PAGE,
    payload,
})
