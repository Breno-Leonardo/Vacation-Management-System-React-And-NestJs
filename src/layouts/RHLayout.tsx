import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RHLayout() {
  return (
    <div className="App">
      <Header forWho="RH"></Header>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
