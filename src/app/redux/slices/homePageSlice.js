import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemList : []
}

const homePageSlice = createSlice({
    name : "homePage",
    initialState,
    reducers : {
        addItemToList : (state, action) => {
            state.itemList = [...state.itemList, action.payload]
        }
    }

});

export const {addItemToList} = homePageSlice.actions;

export default homePageSlice.reducer