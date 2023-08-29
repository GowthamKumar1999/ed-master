import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import addressSlice from "./slices/addressSlice";
import courseSlice from "./slices/courseSlice";

export default configureStore({
    reducer: {
        User: userSlice,
        Address: addressSlice,
        Courses : courseSlice
    }
})