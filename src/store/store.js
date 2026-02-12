import { configureStore } from "@reduxjs/toolkit";
import recruiterReducer from "./recruiterSlice";
import assistantReducer from "./assistantSlice";

export const store = configureStore({
  reducer: {
    recruiter: recruiterReducer,
    assistant: assistantReducer,
  },
});