import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  photo: '',
};

//the above is the initial state.
//When the app starts, everything ny default is blank

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      //the above function will be used to remember the name, email and photos from the user info provided by google auth
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;

      //will clear the storeed data when the user logs out
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
