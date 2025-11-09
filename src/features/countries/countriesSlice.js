import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
  },
  reducers: {
    setCountries: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
