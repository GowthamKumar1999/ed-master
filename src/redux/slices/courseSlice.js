import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../utils/api.js";


const courseSlice = createSlice({
    name: "course",
    initialState: {
        value: {
          course: {},
          selectCourse:[]
        }
    },
    reducers:{},

    extraReducers: builder => {
        builder.addCase(course.fulfilled, (state,action) => {
            state.value.course = action.payload;
            state.error = null;
        })
        builder.addCase(course.rejected,(state,action) => {
            state.value.course = null;
            state.error = action.error;
        })

  
        builder.addCase(selectCourse.fulfilled, (state,action) => {
            state.value.selectCourse = action.payload;
            state.error = null;
        })
        builder.addCase(selectCourse.rejected,(state,action) => {
            state.value.selectCourse = null;
            state.error = action.error;
        })

    }
    })


    export const course = createAsyncThunk("/course", async (courseData) => {
        const token = localStorage.getItem("token");

        const {data} = await axios.post(baseUrl + "/course/add",courseData, {
          headers:{
            Authorization:"Bearer "+ token
          }
        })
    
    
        return data;
    })


    export  const selectCourse = createAsyncThunk("/selectCourse", async () => {
        const token = localStorage.getItem("token");

        const {data} = await axios.get(baseUrl + "/course/all", {
          headers:{
            Authorization:"Bearer "+ token
          }
        })
        return data;
      })
      export default courseSlice.reducer;