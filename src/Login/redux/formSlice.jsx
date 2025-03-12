import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  dob: '',
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: ''
  },
  formValid: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setError: (state, action) => {
      const { field, error } = action.payload;
      state.errors[field] = error;
    },
    setFormValid: (state, action) => {
      state.formValid = action.payload;
    }
  }
});

export const { setField, setError, setFormValid } = formSlice.actions;
export default formSlice.reducer;
