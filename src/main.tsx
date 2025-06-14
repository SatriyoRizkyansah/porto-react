import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ClickSpark from "./components/click-spark/click-spark";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ClickSpark>
      <App />
    </ClickSpark>
  </BrowserRouter>
);
