import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    namaUser: ""
  },
  reducers: {
    setUser: (state, action) => {
      // simpan di redux
      state.namaUser = action.payload

      // simpan di local storage
      localStorage.setItem('namaUser', action.payload)
    },
    logout: (state, action) => {
      // hapus semua data di redux & local storage
      state.namaUser = ""
      localStorage.clear()
    }
  }
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer