import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    namaUser: ""
  },
  reducers: {
    setUser: (state, action) => {
      state.namaUser = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer