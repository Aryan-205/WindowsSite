import { configureStore } from '@reduxjs/toolkit'
import featureReducer from './feature.js'

  const store = configureStore({
  reducer:{
    feature:featureReducer
  } 
})
export default store