import { Routes, Route } from "react-router-dom";
import { TeamPage } from "./pages/gestor/TeamPageManager";
import { RequestsPageManager } from "./pages/gestor/RequestsPageManager";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/pagina-do-time-gestor" element={<TeamPage></TeamPage>}></Route>
      <Route path="/pagina-de-solicitacoes-gestor" element={<RequestsPageManager></RequestsPageManager>}></Route>
    </Routes>
  );
}
