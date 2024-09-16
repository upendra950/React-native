import { PUT_CART_DATA, SET_CART_DATA } from "./CounterAction";

const intialState:any = { cartList: [] };
export const cartReducer =(state =intialState, action:any)=>{
    // console.log('this is cartReducer',action.elementData)
switch(action.type){
    case PUT_CART_DATA:
        return{
            ...state,
            // cartList: [...state.cartList, action.elementData],
            cartList:action.elementData
            
        }
    default:
        return {state}
}
}
