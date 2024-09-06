import { createSlice } from "@reduxjs/toolkit";

const productDetail = createSlice({
    name:"ProductDetails",
    initialState:[],
    reducers:{
        addDetails:(state, action)=>{
            state=[action.payload]
            return state
        }
    }
})

export const productDetailActions= productDetail.actions
export default productDetail;