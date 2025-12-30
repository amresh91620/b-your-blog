import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: { blogs: [] },
  reducers: {}
});

export default blogSlice.reducer;
