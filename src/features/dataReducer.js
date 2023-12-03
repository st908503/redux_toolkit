// import { createSlice } from '@reduxjs/toolkit';

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: {
//     fullData: [],
//   },
//   reducers: {
//     setFullData(state, action) {
//       state.fullData = action.payload;
//     },
//   },
// });

// export const { setFullData } = dataSlice.actions;
// export default dataSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const dataSilce = createSlice({
  name: 'data',
  initialState: {
    fullData: []
  },
  reducers: {
    setFullData(state, action) {
      state.fullData = action.payload;
    }
  }
})

export const { setFullData } = dataSilce.actions;
export default dataSilce.reducer