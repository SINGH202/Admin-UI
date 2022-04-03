import {
    GET_DATA,
    SEARCH_DATA,
    EDIT_DATA,
    DELETE_SINGLE,
    DELETE_MULTIPLE,
    SET_PAGE,
} from './ActionTypes.js';

export const getAdminData = (payload) => ({
    type: GET_DATA,
    payload,
})

export const searchData = (payload) => ({
    type: SEARCH_DATA,
    payload,
})

export const editAdminData = (payload) => ({
    type: EDIT_DATA,
    payload,
})

export const deleteSingleData = (payload) => ({
    type: DELETE_SINGLE,
    payload,
})

export const deleteMultipleData = (payload) => ({
    type: DELETE_MULTIPLE,
    payload,
})

export const setPage = (payload) => ({
    type: SET_PAGE,
    payload,
})
