import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const initState = {
    loading : false,
    data: null,
    error: null,
}

export const ansycContact = createAsyncThunk(
    'contact/fetchContact',
    async (data)=>{
        const response = await await axios.post('https://colleges-backend.herokuapp.com/api/contact-forms',
            {
            "data": data
            }
        )

        return response.data;
    }
);

export const contactSlice = createSlice({
    name: 'contact',
    initialState: initState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder.addCase(ansycContact.pending, (state) =>{
            state.loading  = true;
        })
        .addCase(ansycContact.fulfilled, (state , action) =>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        .addCase( ansycContact.rejected, (state , action) =>{
            state.loading = false;
            state.data = null;
            state.error = action;
        } )
    }
});

export const getContactData = (state) => state.contact;

export default contactSlice.reducer;