import { Outlet } from "react-router-dom";
import { FooterMenu } from "../components/FooterMenu";
import { Header } from "../components/Header";

export function ManagerCollaboratorLayout() {
  return (
    <div className="App">
      <Header forWho="Colaborador Gestor"></Header>
      <div className="content">
        <Outlet></Outlet>
      </div>
      <FooterMenu forWho="Colaborador Gestor"></FooterMenu>
      
    </div>
  )
}
