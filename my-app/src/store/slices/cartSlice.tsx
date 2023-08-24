import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPizzaCardProps } from "../../components/Pizzas/PizzaCard/PizzaCard"


interface IInitialStateProps {
    cart : IPizzaCardProps[]
}


const initialState : IInitialStateProps = {
  cart : []
 
}


export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addCart : (state,action : PayloadAction<IPizzaCardProps>) => {
            console.log(action.payload)
            state.cart.push(action.payload)
        }
    }

})


export const { addCart } = cartSlice.actions
export default cartSlice.reducer