import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPizzaCardProps } from "../../components/Pizzas/PizzaCard/PizzaCard"


interface IInitialStateProps {
   
    cart: IItemCart[]
}



export interface IItemCart {
    id : string,
    name: string,
    sizes: string,
    price: string,
    imageUrl : string,
    types : string,
    count? : number | undefined 
}

const initialState: IInitialStateProps = {
  
    cart: []

}




export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<IItemCart>) => {

            const findItem = state.cart.find(obj => obj.id === action.payload.id);

            if (findItem) {
                findItem.count = (findItem.count ?? 0) + 1;
            } else {
                const newItem = { ...action.payload, count: 1 };
                state.cart.push(newItem);
            }

       

        },


        addItemCart : (state,action : PayloadAction<string>) => {
            const findItem = state.cart.find((obj) => obj.id === action.payload)
            if (findItem && findItem.count) {
               findItem.count++
            }
        },


        removeItemCart: (state, action: PayloadAction<string>) => {

            const findItem = state.cart.find((obj) => obj.id === action.payload)
            if (findItem && findItem.count) {
                if (findItem.count > 1) {
                    findItem.count--
                }
                else {
                    state.cart = state.cart.filter((obj) => obj.id !== action.payload)
                }
            }
                
                
            

        },



        clearItemCart: (state, action: PayloadAction<string>) => {

            const findItem = state.cart.find((obj) => obj.id === action.payload)
            if (findItem) {
                state.cart = state.cart.filter((obj) => obj.id !== action.payload)
            }
                
                
            

        },



        clearCart: (state) => {

            state.cart = []

        },

    }
})


export const { addCart , removeItemCart, clearCart, addItemCart, clearItemCart} = cartSlice.actions
export default cartSlice.reducer