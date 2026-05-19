import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,

    vehicle: {
        model: null,
        color: null,
        wheels: null,
        interior: null,
    },

    equipments: [],
    accessories: [],

    totalPrice: 0,
}

export const configuratorSlice = createSlice({
    name: 'configurator',
    initialState,
    reducers: {
        test: (state, action) => {
            console.log('test ok');
        },
        nextStep: (state, action) => {

        },
        prevStep: (state, action) => {
            
        },
        goToStep: (state, action) => {
            
        },
        resetConfigurator: (state, action) => {
            
        }
    },
})

export const { test } = configuratorSlice.actions;

export default configuratorSlice.reducer;