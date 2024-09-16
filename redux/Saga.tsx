import { put, takeEvery } from "redux-saga/effects";
import { SetUserData, UserList } from "./CounterAction";

function* useList():any{
    const url="https://jsonplaceholder.typicode.com/posts?_limit=30";
    let data=yield fetch(url);
    data = yield data.json();
    data = data.map((element: any) => {
        if (element.id <= 15) {
          return { ...element, status: 'Approved' };
        } else if (element.id > 15 && element.id < 22) {
          return { ...element, status: 'Inprogress' };
        } else {
          return { ...element, status: 'Closed' };
        }
      });
    // console.warn("data in saga ", data);
    yield put({type:SetUserData,data})
}

function* SagaData(){
    yield takeEvery(UserList,useList)
}

export default SagaData;