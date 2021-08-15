import { ADD_TO_CART,REMOVE_FROM_CART } from "../constants";

const initialState = {
    cardData : []
}

export default function cardItems(state = [], action){
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('cartReducer ADD: ',state)
            return [
                ...state,
                {cardData : action.data}
            ]
        case REMOVE_FROM_CART:
            console.warn('cartReducer REMOVE: ',state)
            state.pop()
            return [
                ...state
            ]
        default:
            return state
    }
} 