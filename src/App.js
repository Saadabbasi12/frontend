import AppRoutes from "./routes/AppRoutes";
import AssistantButton from "./components/assistant/AssistantButton";
import AssistantPanel from "./components/assistant/AssistantPanel";
import './App.css';

function App() {
  return (
     <>
      <AppRoutes />
      <AssistantButton />
      <AssistantPanel />
    </>
  );
}

export default App;
