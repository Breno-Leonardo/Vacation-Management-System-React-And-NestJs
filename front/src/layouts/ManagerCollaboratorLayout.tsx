import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function ManagerCollaboratorLayout() {
  return (
    <div className="App">
      <Header forWho="Colaborador Gestor"></Header>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
