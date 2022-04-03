import {
    GET_DATA,
    SEARCH_DATA,
    EDIT_DATA,
    DELETE_SINGLE,
    DELETE_MULTIPLE,
    SET_PAGE,
} from './ActionTypes.js'

const initState = {
    data: [],
    filterData: [],
    page: 1,
}

export const Reducer = (store = initState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...store,
                data:action.payload,
                filterData:action.payload,
            }
        case SEARCH_DATA:
            return {
                ...store,
                filterData:[...searchDataInFields(store.data,action.payload)],
            }
        case EDIT_DATA:
            return {
                ...store,
                data:[...editData(store.data,action.payload)],
                filterData:[...editData(store.filterData,action.payload)],
            }
        case DELETE_SINGLE:
            return {
                ...store,
                data:[...deleteData(store.data,action.payload)],
                filterData:[...deleteData(store.filterData,action.payload)], 
            }
        case DELETE_MULTIPLE:
            return {
                ...store,
                data:[...deleteMultipleData(store.data,action.payload)],
                filterData:[...deleteMultipleData(store.filterData,action.payload)], 
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


const searchDataInFields = (allData,input) => {
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

const deleteMultipleData = (allData,forDeletedData) => {
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