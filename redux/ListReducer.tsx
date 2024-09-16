
import { SET_CART_DATA } from "./CounterAction";
const intialState:any[] = [];
export const listReducer = (state =intialState, action:any)=>{
    switch(action.type){
        case 'SET_USER_LIST':
            return[
                ...state,
                action.data
            ] 
        default :
        return state      
    }

}