import { configureStore, isImmutableDefault } from "@reduxjs/toolkit"
import { counterReducer } from "./CounterReducer"
import createSagaMiddleware from 'redux-saga';
import SagaData from "./Saga";
import { listReducer } from "./ListReducer";
import CartSaga from "./CartSaga";
import { cartReducer } from "./CartReducer";

 
 const sagaMiddleware = createSagaMiddleware();
 const Store = configureStore({
    reducer:{
        counter:counterReducer,
        data:listReducer,
        cartdata:cartReducer
        
    },
    middleware:(gDM) => gDM({
      serializableCheck:false,
      immutableCheck:false,
      thunk:false
      
    }).concat( sagaMiddleware)
       
  });
sagaMiddleware.run(SagaData);
sagaMiddleware.run(CartSaga);
export default Store
