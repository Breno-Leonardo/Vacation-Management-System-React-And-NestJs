import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function ManagerLayout() {
  return (
    <div className="App">
      <Header forWho="Gestor"></Header>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
