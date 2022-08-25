import {ADD_ITEM, REMOVE_ITEM, REMOVE_ALL, CHANGE_QTY} from './action'

const INIT_STATE = {
    data: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case ADD_ITEM:
            return {
                ...state,
                data: [...state.data, action.value]
            }
        
        case REMOVE_ITEM:
            return {
                ...state,
                data: state.data.filter(item => item !== action.value)
            };

        case REMOVE_ALL:
            return {
                ...state,
                data: []
            }

        case CHANGE_QTY:
            return {
                ...state,
                data: state.data.map(item=>
                    item.id === action.id ?
                    {...item, quantity: action.value} 
                    : item)
            }

            default:
                return state
    }
}

export default reducer