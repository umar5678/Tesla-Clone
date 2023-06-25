import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/cars/CarSlice"


export const store = configureStore({
    reducer: {
        car: carReducer
    }
})