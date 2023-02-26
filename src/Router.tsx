import { Routes, Route } from "react-router-dom";
import { RequestsPageManager } from "./pages/gestor/RequestsPageManager";
import { Login } from "./pages/Login";
import { HistoryRequestsPageManager } from "./pages/gestor/HistoryRequestPageManager";
import { TeamPageManager } from "./pages/gestor/TeamPageManager";
import { ResponsePageManager } from "./pages/gestor/ResponsePageManager";
import { RequestsPageCollaborator } from "./pages/colaborador/RequestsPageCollaborator";
import { TeamPageCollaborator } from "./pages/colaborador/TeamPageCollaborator";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/pagina-do-time-gestor"
        element={<TeamPageManager></TeamPageManager>}
      ></Route>
      <Route
        path="/pagina-de-solicitacoes-gestor"
        element={<RequestsPageManager></RequestsPageManager>}
      ></Route>
      <Route
        path="/pagina-de-historico-solicitacoes-gestor"
        element={<HistoryRequestsPageManager></HistoryRequestsPageManager>}
      ></Route>
      <Route
        path="/pagina-de-resposta-gestor"
        element={<ResponsePageManager></ResponsePageManager>}
      ></Route>

<Route
        path="/pagina-do-time-colaborador"
        element={<TeamPageCollaborator></TeamPageCollaborator>}
      ></Route>
      <Route
        path="/pagina-de-solicitacoes-colaborador"
        element={<RequestsPageCollaborator></RequestsPageCollaborator>}
      ></Route>
      <Route
        path="/pagina-de-historico-solicitacoes-colaborador"
        element={<HistoryRequestsPageManager></HistoryRequestsPageManager>}
      ></Route>
      <Route
        path="/pagina-nova-solicitacao"
        element={<ResponsePageManager></ResponsePageManager>}
      ></Route>
    </Routes>
  );
}
