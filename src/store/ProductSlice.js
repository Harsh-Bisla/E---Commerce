import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:"Products",
    initialState:[],
    reducers:{
        addInitialProducts:(state, action)=>{
            state=action.payload
            return state
        }
    }
})
export const productActions= productSlice.actions

export default productSlice;