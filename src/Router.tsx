import { Routes, Route } from "react-router-dom";
import { RequestsPageManager } from "./pages/gestor/RequestsPageManager";
import { Login } from "./pages/Login";
import { HistoryRequestsPageManager } from "./pages/gestor/HistoryRequestPageManager";
import { TeamPageManager } from "./pages/gestor/TeamPageManager";
import { ResponsePageManager } from "./pages/gestor/ResponsePageManager";
import { RequestsPageCollaborator } from "./pages/colaborador/RequestsPageCollaborator";
import { TeamPageCollaborator } from "./pages/colaborador/TeamPageCollaborator";
import { HistoryRequestsPageCollaborator } from "./pages/colaborador/HistoryRequestPageCollaborator";
import { ThirteenthPageCollaborator } from "./pages/colaborador/ThirteenthPageCollaborator";
import { HomeRH } from "./pages/rh/HomeRH";
import { NewRequestPage } from "./pages/colaborador/NewRequestPage";
import { RegisterCollaboratorPage } from "./pages/rh/RegisterCollaboratorPage";

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
        path="/pagina-nova-solicitacao"
        element={<NewRequestPage></NewRequestPage>}
      ></Route>
      <Route
        path="/pagina-de-solicitacoes-colaborador"
        element={<RequestsPageCollaborator></RequestsPageCollaborator>}
      ></Route>
      <Route
        path="/pagina-de-historico-solicitacoes-colaborador"
        element={
          <HistoryRequestsPageCollaborator></HistoryRequestsPageCollaborator>
        }
      ></Route>
      <Route
        path="/pagina-decimo-terceiro"
        element={<ThirteenthPageCollaborator></ThirteenthPageCollaborator>}
      ></Route>

      <Route
        path="/pagina-inicial-rh"
        element={<HomeRH></HomeRH>}
      ></Route>
      <Route
        path="/pagina-cadastrar-colaborador"
        element={<RegisterCollaboratorPage></RegisterCollaboratorPage>}
      ></Route>
      <Route
        path="/pagina-cadastrar-gestor"
        element={<HomeRH></HomeRH>}
      ></Route>
      <Route
        path="/pagina-remover"
        element={<HomeRH></HomeRH>}
      ></Route>
      
    </Routes>
  );
}
