import { createSlice } from "@reduxjs/toolkit";


const cartStore = createSlice({
    name : "cart",
    initialState : {
       items : []
    },
    reducers : {
        addItems : (state, action)=>{
            state.items.push(action.payload);
        },
        removeItems : (state,action)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            state.items.length=0;
        }
    }
})

export const {addItems,removeItems,clearCart} =cartStore.actions;

export default cartStore.reducer;