import { createSlice } from "@reduxjs/toolkit"
import GetAllProducts from "../../api/products"



const PostsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    },
    reducer(state, action) {
        state.push(action.payload)
      },
    extraReducers: {
        [GetAllProducts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [GetAllProducts.pending]: (state, action) => {
            state.loading = true
        },
        [GetAllProducts.rejected]: (state, action) => {
            state.error = action.payload
        },
      

 },
   
})


export default PostsSlice.reducer