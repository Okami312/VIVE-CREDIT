import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();

  const showHeader = location.pathname === "/";

  return (
    <div>
      {showHeader && <header>Welcome to the Home Page</header>}
      <AppRoutes />
    </div>
  );
}
export default App;
