import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
// import { increment, decrement, incrementBy } from './actions/countActions'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'




const store = configureStore()
//console.log(store)

// console.log('state', store.getState())

store.subscribe(()=>{
//     console.log('state updated', store.getState())
})

// handle page reload
// if (true) {
//     store.dispatch(startGetUsers())
// }




ReactDOM.render( <Provider store={store}>
    
        <App/>
    
</Provider>, document.getElementById('root'))
