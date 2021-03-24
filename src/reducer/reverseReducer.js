const stringInitialState = ''

const reverseReducer = ( state =stringInitialState, action ) => {
    switch (action.type) {
        case 'REVERSE_WORD' :{
            return action.payload
        }
        default: {
            return state
        }
    }}
    
    export default reverseReducer