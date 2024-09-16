import { put, takeEvery } from "redux-saga/effects";
import { CART_LIST, PUT_CART_DATA, SET_CART_DATA } from "./CounterAction";
import { cartReducer } from "./CartReducer";

function* useList(data:any):any{
    console.log(data);
    yield put({type:PUT_CART_DATA,data})
}

function* CartSaga(){
    yield takeEvery(SET_CART_DATA,useList)
}

export default CartSaga;