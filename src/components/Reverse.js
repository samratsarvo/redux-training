import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reverse } from '../actions/reverseAction'

const Reverse = (props) => {
    // const [word , setWord] = useState('')

    const revWord = useSelector((state) => {
        return state.reverse
    })
    
    

    const dispatch = useDispatch()

const handleInput = (e) => {
    const input = e.target.value
    dispatch(reverse(input))
}

// const handleForm = (e) => {
//     e.preventDefault()
    
//     // console.log(formData)
//     dispatch(reverse(word))
//     setWord('')
// }

    return (
        <div>

            
            <input type='text'  placeholder='enter the word' value={revWord} name='word' onChange={handleInput}/> <hr/>
            
            
            {revWord.split('').reverse().join('')}
             
        </div>
        )
}

export default Reverse