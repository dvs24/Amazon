import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemList : [],
    userInfo : {}
}

const homePageSlice = createSlice({
    name : "homePage",
    initialState,
    reducers : {
        addItemToList : (state, action) => {
            state.itemList = [...state.itemList, action.payload]
        },
        addUserInfo : (state, action) => {
            state.userInfo = action.payload;
        }
    }

});

export const {addItemToList, addUserInfo} = homePageSlice.actions;

export default homePageSlice.reducer