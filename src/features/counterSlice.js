import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Increment One
        increment: (state) => {
            return { value: state.value + 1 }
        },
        // Decrement One
        decrement: (state) => {
            return { value: state.value - 1 }
        },
        // Increment by Amount
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload }
        }
    }
})

//  exporting actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// exporting reducer
export default counterSlice.reducer