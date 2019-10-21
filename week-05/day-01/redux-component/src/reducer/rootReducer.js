const initState = {
	number: 0,
	tagList: ['blue', 'bold', 'hipster']
}

export default function(state = initState, action) {
	if (action.type === 'INCREASE') {
		return {
			...state,
			number: ++state.number
		}
	} else if (action.type === 'DECREASE') {
		return {
			...state,
			number: --state.number
		}
	} else if (action.type === 'SETTER') {
		return {
			...state,
			number: action.number
		}
	} else if (action.type === 'RESETTER') {
		return {
			...state,
			number: 0
		}
	} else if (action.type === 'ADD_TAG') {
		return {
			...state,
			tagList: [...state.tagList, action.value]
		}
  }
  else if(action.type === 'REMOVE_TAG'){
    console.log(action.tag);
    
    return{
      ...state,
      tagList: state.tagList.filter(tag => tag !== action.tag)
    }
  }

	return state
}
