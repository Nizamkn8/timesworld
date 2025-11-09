import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from '../features/auth/authSlice'
import  countriesReducer  from '../features/countries/countriesSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    countries: countriesReducer,
  },
});
