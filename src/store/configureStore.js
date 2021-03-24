import { createStore, combineReducers } from 'redux'
import { useState } from 'react'

import reverseReducer from '../reducer/reverseReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        reverse: reverseReducer
    }))
    return store
}

export default configureStore