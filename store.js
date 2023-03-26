import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import combineReducer from './redux/reducers'
import rootSaga from './redux/sagas'
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const sagaMiddleware = createSagaMiddleware()

const reducer = (state=combineReducer, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return combineReducer(state, action);
    }
  };
  

  export const store = configureStore({
   reducer: reducer, 
   middleware:()=>[sagaMiddleware ],
   devTools: true,

})
// export const makeStore = () =>
//   configureStore({
//     reducer: rootReducer, 
//     middleware:()=>[sagaMiddleware ]
//   });

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       [authSlice.name]: authSlice.reducer,
//     },
//     devTools: true,
//   });
const makeStore = () => store;
sagaMiddleware.run(rootSaga)
// export default store

export const wrapper = createWrapper(makeStore);
// console.log(wrapper,4444)