import { PUT_CART_DATA, SET_CART_DATA } from "./CounterAction";

const intialState:any[] = [];
export const cartReducer =(state =intialState, action:any)=>{
switch(action.type){
    // case SET_CART_DATA:
    // return[    
    //     ...state,
    //     action.data
    // ]
    case PUT_CART_DATA:
        return[
            ...state,
        action.data
        ]
    default:
        return state
}
}
