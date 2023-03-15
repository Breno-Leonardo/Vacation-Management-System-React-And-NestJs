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
import { CollaboratorLayout } from "./layouts/CollaboratorLayout";
import { ManagerLayout } from "./layouts/ManagerLayout";
import { RHLayout } from "./layouts/RHLayout";
import { RegisterTeamPage } from "./pages/rh/RegisterTeamPage";
import { RemovePage } from "./pages/rh/RemovePage";
import { ManagerCollaboratorLayout } from "./layouts/ManagerCollaboratorLayout";
import { RequestsPageCollaboratorManager } from "./pages/colaborador/RequestsPageCollaboratorManager";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>

      <Route path="/gestor" element={<ManagerLayout></ManagerLayout>}>
        <Route
          path="time"
          element={<TeamPageManager></TeamPageManager>}
        ></Route>
        <Route
          path=""
          element={<RequestsPageManager></RequestsPageManager>}
        ></Route>
        <Route
          path="solicitacoes"
          element={<RequestsPageManager></RequestsPageManager>}
        ></Route>
        <Route
          path="historico"
          element={<HistoryRequestsPageManager></HistoryRequestsPageManager>}
        ></Route>
        <Route
          path="resposta"
          element={<ResponsePageManager></ResponsePageManager>}
        ></Route>
      </Route>

      <Route
        path="/colaborador" 
        element={<CollaboratorLayout></CollaboratorLayout>}
      >
        <Route
          path=""
          element={<RequestsPageCollaborator></RequestsPageCollaborator>}
        ></Route>
        <Route
          path="time"
          element={<TeamPageCollaborator></TeamPageCollaborator>}
        ></Route>
        <Route
          path="nova-solicitacao"
          element={<NewRequestPage></NewRequestPage>}
        ></Route>
        <Route
          path="solicitacoes"
          element={<RequestsPageCollaborator></RequestsPageCollaborator>}
        ></Route>
        <Route
          path="historico"
          element={
            <HistoryRequestsPageCollaborator></HistoryRequestsPageCollaborator>
          }
        ></Route>
        <Route
          path="decimo-terceiro"
          element={<ThirteenthPageCollaborator></ThirteenthPageCollaborator>}
        ></Route>
      </Route>

      <Route
        path="/colaborador-gestor"
        element={<ManagerCollaboratorLayout></ManagerCollaboratorLayout>}
      >
        <Route
          path=""
          element={<RequestsPageCollaborator></RequestsPageCollaborator>}
        ></Route>
        <Route
          path="time"
          element={<TeamPageCollaborator></TeamPageCollaborator>}
        ></Route>
        <Route
          path="nova-solicitacao"
          element={<NewRequestPage></NewRequestPage>}
        ></Route>
        <Route
          path="solicitacoes"
          element={<RequestsPageCollaboratorManager></RequestsPageCollaboratorManager>}
        ></Route>
        <Route
          path="historico"
          element={
            <HistoryRequestsPageCollaborator></HistoryRequestsPageCollaborator>
          }
        ></Route>
        <Route
          path="decimo-terceiro"
          element={<ThirteenthPageCollaborator></ThirteenthPageCollaborator>}
        ></Route>
      </Route>

      <Route path="/rh" element={<RHLayout></RHLayout>}>
        <Route path="" element={<HomeRH></HomeRH>}></Route>
        <Route
          path="cadastrar-colaborador"
          element={<RegisterCollaboratorPage></RegisterCollaboratorPage>}
        ></Route>
        <Route
          path="cadastrar-time"
          element={<RegisterTeamPage></RegisterTeamPage>}
        ></Route>
        <Route path="remover-colaborador" element={<RemovePage></RemovePage>}></Route>
      </Route>
    </Routes>
  );
}
