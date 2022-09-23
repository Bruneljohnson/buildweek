import { configureStore } from "@reduxjs/toolkit";
import DataSliceReducer from "./data-slice/DataSlice";

export const store = configureStore({
  reducer: { data: DataSliceReducer },
});
