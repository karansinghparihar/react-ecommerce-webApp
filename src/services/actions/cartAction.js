import { ADD_TO_CART } from "../constants"
import { REMOVE_FROM_CART } from "../constants"

export const addToCart = (data)=>{
    console.warn('add to cart Action : ',data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeFromCart = ()=>{
    console.warn('remove from card action')
    return {
        type: REMOVE_FROM_CART
    }
}