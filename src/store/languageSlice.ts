import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState } from "./LanguageState";

const initialState: LanguageState = {
  language: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
