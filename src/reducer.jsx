import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    value: "",
    values: "upcoming"
}

export const stateSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        upcoming: (state) => {
            state.value =  "",
            state.values = "upcoming"
        },
        popular: (state) => {
            state.value = "popular",
            state.values = "top_rated?page=1"
        },
        newest: (state) => {
            state.value = "newest",
            state.values = "now_playing?page=1"
        },
        trending: (state) => {
            state.value = "trending",
            state.values = "popular?page=1"
        },
    }
})

export const {upcoming, popular, newest, trending} = stateSlice.actions

export default stateSlice.reducer