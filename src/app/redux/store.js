import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../redux/slices/homePageSlice"

 export const store = configureStore({
    reducer : {
        homePage :homePageReducer   
    }
 })