import { configureStore, createSlice } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import cartSlice from "./CartSlice";
import productDetail from "./ProductDetails";



const productLimitSlice= createSlice({
    name:"productlimit",
    initialState:20,
    reducers:{
        updateLimit:(state, action)=>{
            state=action.payload
            return state
        }
    }
})


const categorySlice= createSlice({
    name:"category",
    initialState:"",
    reducers:{
        updatecategory:(state, action)=>{
            state=action.payload
            return state
        }
    }
})

const store = configureStore({
    reducer:{
        Products:productSlice.reducer,
        productlimit:productLimitSlice.reducer,
        Cart:cartSlice.reducer,
        ProductDetails:productDetail.reducer,
        category:categorySlice.reducer
    }
})


export const productLimitActions= productLimitSlice.actions
export const categorySliceActions= categorySlice.actions 
export default store;