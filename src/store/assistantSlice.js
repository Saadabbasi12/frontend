import { createSlice } from "@reduxjs/toolkit";

const assistantSlice = createSlice({
  name: "assistant",
  initialState: {
    isOpen: false,
    messages: [],
    status: "idle", // idle | thinking | speaking | listening
  },
  reducers: {
    toggleAssistant: (state) => {
      state.isOpen = !state.isOpen;
    },

    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    setAssistantStatus: (state, action) => {
      state.status = action.payload;
    },

    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const {
  toggleAssistant,
  addMessage,
  setAssistantStatus,
  clearMessages,
} = assistantSlice.actions;

export default assistantSlice.reducer;