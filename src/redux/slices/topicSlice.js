import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../Utils/Api";


const topicSlice = createSlice({
    name: "topic",
    initialState: {
        value: {
            topics: {},
        }
    },
    reducers:{},

    extraReducers: builder => {
        builder.addCase(Topic.fulfilled, (state,action) => {
            state.value.topics = action.payload;
            state.error = null;
        })
        builder.addCase(Topic.rejected,(state,action) => {
            state.value.topics = null;
            state.error = action.error;
        })


    }
    })


    export const Topic = createAsyncThunk("/addtopic", async (courseData) => {
        const token = localStorage.getItem("token");

        const {data} = await axios.post(baseurl + "/topic/add",courseData, {
            headers:{
                Authorization:"Bearer "+ token
            }
        })
    
    
        return data;
    })


  
    

    export default topicSlice.reducer;