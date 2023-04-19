import "./App.css";
import { KeypressProvider } from "./context/KeypressProvider";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import Listeners from "./components/Listeners";

function App() {
  return (
    <KeypressProvider>
      <div className="container">
        <A />
        <B />
        <C />
        <Listeners />
      </div>
    </KeypressProvider>
  );
}

export default App;
