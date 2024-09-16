import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { CART_LIST, PUT_CART_DATA, SET_CART_DATA } from "./CounterAction";
import { cartReducer } from "./CartReducer";
import { useSelector } from "react-redux";

function* useList(data:any):any{
    const elementData =data.data;
    //  console.log('this is saga data',elementData);
    yield put({type:PUT_CART_DATA,elementData})
}

function* CartSaga(){
    yield takeEvery(SET_CART_DATA,useList)
}

export default CartSaga;