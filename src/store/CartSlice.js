import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        initialCart:(state, action)=>{
            return state
        },
        addProductsInCart:(state, action)=>{
            let existingItem = state.find((cartItem)=>cartItem.id===action.payload.id)
            if(!existingItem){
                let newState= [...state, {...action.payload, quantity: 1}]
                return newState
            } else {
                let newState = state.map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                });
                return newState;
            }
        },
        removeProductsFromCart:(state, action)=>{
           let newState = state.filter((cartItem=>cartItem.id!==action.payload))
            return newState
        },
        removeAllItems:(state, action)=>{
         return action.payload
        },
        updateQuantity:(state, action)=>{
            const { id, quantity } = action.payload;
            return state.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            );
        }
    }
})
export const cartSliceActions = cartSlice.actions
export default cartSlice;