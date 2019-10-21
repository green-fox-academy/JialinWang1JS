const initState = {
	number: 0
}

export default function(state = initState, action) {
	if (action.type === 'INCREASE') {
		return {
			number: ++state.number
		}
	} else if (action.type === 'DECREASE') {
		return {
			number: --state.number
		}
  }
  else if(action.type === 'SETTER'){
    return {
      number: action.number
    }
  }else if(action.type === 'RESETTER'){
    return {
      number: 0
    }
  }

	return state
}
