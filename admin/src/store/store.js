import {createStore,applyMiddleware} from 'redux'
//applyMiddleware  redux 中的中间件
import thunk from 'redux-thunk'
import reducer from './reducer'

export default createStore(reducer,applyMiddleware(thunk))
