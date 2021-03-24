import React from 'react'
// import UsersList from './components/users/usersList'
// import { Link, Route } from 'react-router-dom'
// import Home from './components/users/home'
// import UsersPosts from './components/users/usersPosts'
// import NumberContainer from './components/NumberApp/NumbersContainer'
// import UserShow from './components/users/userShow'
import Reverse from './components/Reverse'


function App (props) {
  return(
    // <div>
    //   <h1>Random Number Generator</h1>
    //   <NumberContainer/>
    //   <Link to='/users'> Users </Link>
    //   <Link to='/home'> home</Link>
    //   <Link to='/posts'> posts</Link>


    //   <Route path='/home' component={Home} exact={true}/>
    //   <Route path='/posts' component={UsersPosts}/>
    //   <Route path='/users' component={UsersList} exact={true} />
    //   <Route path='/users/:id' component={UserShow} />
    // </div>

    <Reverse />
  )
}

export default App









// import { useSelector, useDispatch } from 'react-redux'
// import { increment } from './actions/countActions'
// import Btn from './Btn'
// import ShowCount from './Show'

// function App() {
//   const count = useSelector((state)=> {
//     return state.count
//   })

//   const dispatch = useDispatch()

//   return (
//     <div>
//       <h1>Redux training</h1>
//       <h2>count - { count }</h2>
//       <button onClick={()=> {
//         dispatch(increment())
//       }}>+1</button>
//       <Btn/> 
//       <hr/>
//       <ShowCount/>
//     </div>
//   )
// }

// export default App
