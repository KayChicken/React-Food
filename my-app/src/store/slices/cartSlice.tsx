import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPizzaCardProps } from "../../components/Pizzas/PizzaCard/PizzaCard"


interface IInitialStateProps {
   
    cart: IItemCart[]
}



export interface IItemCart {
    _id : number, 
    title : string, 
    size :  string , 
    type : string,
    price : number,
    imageUrl : string,
    count? : number
}

const initialState: IInitialStateProps = {
  
    cart: []

}




export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<IItemCart>) => {

            const findItem = state.cart.find(obj => obj._id === action.payload._id && obj.type === action.payload.type && obj.size === action.payload.size);

            if (findItem) {
                findItem.count = (findItem.count ?? 0) + 1;
            } else {
                const newItem = { ...action.payload, count: 1 };
                state.cart.push(newItem);
            }

       

        },


        addItemCart : (state,action : PayloadAction<{_id : number , type : string , size : string}>) => {
            const findItem = state.cart.find((obj) => obj._id === action.payload._id && obj.type === action.payload.type && obj.size === action.payload.size)
            if (findItem && findItem.count) {
               findItem.count++
            }
        },


        removeItemCart: (state, action: PayloadAction<{_id : number , type : string , size : string}>) => {

            const findItem = state.cart.find((obj) => obj._id === action.payload._id && obj.type === action.payload.type && obj.size === action.payload.size)
            
            if (findItem && findItem.count) {
                if (findItem.count > 1) {
                    findItem.count--
                }
                else {
                    
                    state.cart = state.cart.filter((obj) => findItem !== obj)
                }
            }
                
                
            

        },



        clearItemCart: (state, action: PayloadAction<{_id : number , type : string , size : string}>) => {

            const findItem = state.cart.find((obj) => obj._id === action.payload._id && obj.type === action.payload.type && obj.size === action.payload.size)
            if (findItem) {
                state.cart = state.cart.filter((obj) => findItem !== obj)
            }
                
                
            

        },



        clearCart: (state) => {

            state.cart = []

        },

    }
})


export const { addCart , removeItemCart, clearCart, addItemCart, clearItemCart} = cartSlice.actions
export default cartSlice.reducer