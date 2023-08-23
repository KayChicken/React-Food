import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    categoryId: number | null,
    sortId : number,
}

const initialState: CounterState = {
  categoryId: null,
  sortId : 0
 
}

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action : PayloadAction<number | null>) => {
    
      state.categoryId = action.payload
    },
    
    changeSort : (state, action: PayloadAction<number>) => {
      state.sortId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCategory, changeSort } = counterSlice.actions

export default counterSlice.reducer