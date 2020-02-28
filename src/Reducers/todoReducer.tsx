const initialState = {
    itemList:[]
}
const usersReducer = (state=initialState, action:any) =>{
    console.log('in todo reducer :', action)
    switch(action.type) {
        case "User_Name": 
        return {...state, name:action.payload}
        case "ADD_ITEMLIST" :
            return {...state, itemList:action.payload}
        case "User_Age": 
        return {...state, age:action.payload}
        break;
        
    }
    return state;

}
export default usersReducer;    