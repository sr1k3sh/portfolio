import { createSlice } from '@reduxjs/toolkit';

const initState = {
    menuStatus : false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState: initState,
    reducers: {
        changeMenuStatus: (state) =>{
            state.menuStatus = !state.menuStatus;
        }
    },
    extraReducers: (builder) => {
    }
});

export const { changeMenuStatus } = menuSlice.actions;

export const getMenuStatus = (state) => state.menuState.menuStatus;

export default menuSlice.reducer;