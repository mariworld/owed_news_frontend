import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router-dom'
// REDUX-STUFF
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import userReducer from './Redux/userReducer'
import postReducer from './Redux/postReducer'
import history from './history'
//import package here and pass it to router
 
// const saveToLocalStorage = (state) => {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   } catch(e){
//     console.log(e)
//   }
// }

// const loadFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.setItem('state')
//     if(serializedState === null) return undefined
//     return JSON.parse(serializedState) 
//   } catch(e){
//     console.log(e)
//     return undefined
//   }
// }


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['user']
// }
const rootReducer = () => {
  return {
  user: userReducer,
  posts: postReducer
  }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const jointReducer = combineReducers(rootReducer())             

// const persistedReducer = persistReducer(persistConfig, jointReducer)



  const store = createStore(
   jointReducer, composeEnhancers(applyMiddleware(thunk)))
   
  //  const persistor = persistStore(store)

   


// store.subscribe(() => saveToLocalStorage(store.getState()))



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
  </Provider>
, document.getElementById('root'));