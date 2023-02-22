import { Routes, Route } from "react-router-dom";
import { TeamPage } from "./pages/gestor/teamPage";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/pagina-do-time" element={<TeamPage></TeamPage>}></Route>
    </Routes>
  );
}
