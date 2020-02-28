import store from '../store'
import { Iitem } from '../Model/ITodo'


export const addDefaultListToStore = (itemList:Iitem[])=>{

    return (dispatch:any)=> {
        dispatch({
            type:"ADD_ITEMLIST",
            payload:itemList
    
        })
     }     
}

export const addItemToList = (item:Iitem)=>{
    let storeList = store.getState().todo.itemList; 
    storeList.push(item);
    return (dispatch:any)=>{
        dispatch({
            type:"ADD_ITEMLIST",
            payload:storeList
    
        })
    }
}

export const deleteItemFromList = (key:string)=>{
    let storeList = store.getState().todo.itemList; 
    const newList =  storeList.filter((item:Iitem) => {
        return key !== item.key
    })
    return (dispatch:any)=>{
        dispatch({
            type:"ADD_ITEMLIST",
            payload:newList
    
        })
    }
}

export const handleDone = (key:string)=>{
    let storeList = store.getState().todo.itemList; 
    let item:Iitem[] = storeList.filter((i:Iitem)=>{
        return i.key === key 
    })
    item[0].isChecked= !item[0].isChecked
    
    return (dispatch:any)=>{
        dispatch({
            type:"ADD_ITEMLIST",
            payload:storeList
    
        })
    }
}