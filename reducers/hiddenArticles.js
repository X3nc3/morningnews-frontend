import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: 'hiddenArticles',
  initialState,
  reducers: {
    addhiddenArticles: (state, action) => {
        state.value.push(action.payload);
    },
    removeHiddenArticles: (state, action)=> {
      state.value = []
    }
  },
});

export const { addhiddenArticles, removeHiddenArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;