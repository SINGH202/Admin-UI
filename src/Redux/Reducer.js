import {
    GET_ADMIN_DATA,
    SEARCH_DATA,
    EDIT_ADMIN_DATA,
    DELETE_SINGLE_DATA,
    DELETE_MULTIPLE_DATA,
    SET_PAGE
} from './ActionTypes.js';

const initState = {
    data: [],
    filterData: [],
    page: 1,
}

export const Reducer = (store = initState, action) => {
    switch(action.type){
        case GET_ADMIN_DATA:
            return {
                ...store,
                data:action.payload,
                filterData:action.payload,
            }
        case SEARCH_DATA:
            return {
                ...store,
                filterData:[...searchDataInAllFields(store.data,action.payload)],
            }
        case EDIT_ADMIN_DATA:
            return {
                ...store,
                data:[...editData(store.data,action.payload)],
                filterData:[...editData(store.filterData,action.payload)],
            }
        case DELETE_SINGLE_DATA:
            return {
                ...store,
                data:[...deleteData(store.data,action.payload)],
                filterData:[...deleteData(store.filterData,action.payload)], 
            }
        case DELETE_MULTIPLE_DATA:
            return {
                ...store,
                data:[...deleteMultipleAdminData(store.data,action.payload)],
                filterData:[...deleteMultipleAdminData(store.filterData,action.payload)], 
            }
        case SET_PAGE:
            return {
                ...store,
                page: action.payload,
            }
        default:
            return store
    }
}


const searchDataInAllFields = (allData,input) => {
    if (input.length === 0){
        return allData;
    }
    var newData = allData.filter((item) => item.name === input || item.email === input || item.role === input);

    return newData;
}

const editData = (allData,updatadData) => {
    const updatedData = allData.map(item =>
        item.id === updatadData.id
          ? item = updatadData
          : item
      );
    return updatedData;
}

const deleteMultipleAdminData = (allData,forDeletedData) => {
    let newDatas;
    for (let i = 0; i < forDeletedData.length; i++){
        if (i === 0){
            newDatas = allData.filter((item) => item.id !== forDeletedData[i]);
        } else{
            newDatas = newDatas.filter((item) => item.id !== forDeletedData[i]);
        }
    }
    return newDatas;
}

const deleteData = (allData,delete_id) => {
    const currentData = allData.filter((item) => item.id !== delete_id);

    return currentData;
}