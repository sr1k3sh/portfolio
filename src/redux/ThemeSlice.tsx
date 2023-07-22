import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 'light',//typeof localStorage !== 'undefined' ? localStorage.getItem("darkMode") : 'light' || 'light',
}
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
    setTheme: (state, action) => {
      state.mode = action.payload.mode
      localStorage.setItem('mode', action.payload.mode)
    }
  }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export const getThemeMode = (state:any) => state.theme.mode
export default themeSlice.reducer