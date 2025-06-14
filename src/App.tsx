// src/App.tsx
import { useRoutes } from "react-router-dom";
import { routesSections } from "./routes/sections";

function App() {
  const routes = useRoutes(routesSections);
  return routes;
}

export default App;
