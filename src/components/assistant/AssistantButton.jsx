import { useDispatch } from "react-redux";
import { toggleAssistant } from "../../store/assistantSlice";

export default function AssistantButton() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleAssistant())}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg text-xl flex items-center justify-center"
    >
      🤖
    </button>
  );
}