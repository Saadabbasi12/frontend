import assistantReducer, { toggleAssistant } from "../store/assistantSlice";

test("assistant toggles open state", () => {
  const initialState = {
    isOpen: false,
    messages: [],
    status: "idle",
  };

  const newState = assistantReducer(initialState, toggleAssistant());

  expect(newState.isOpen).toBe(true);
});