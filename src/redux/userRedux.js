import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = true;
        },
        loginOut: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = false;
        },
        loginRemoveError: (state) => {
            state.error = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, loginOut, loginRemoveError} = userSlice.actions;
export default userSlice.reducer;