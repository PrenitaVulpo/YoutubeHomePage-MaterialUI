import {createStore} from 'redux'

const INITIAL_STATE = {
  isLogged: false
}

function reducer(state = INITIAL_STATE, action){
  console.log(action)

  if(action.type === 'TOGGLE_LOGIN'){
    return (
      {
        ...state,
        isLogged: action.isLogged
      }
    )
  }

  return state
}

const store = createStore(reducer)

export default store