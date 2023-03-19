import {Outlet} from "react-router-dom";
import {FooterMenu} from "../components/FooterMenu";
import {Header} from "../components/Header";

export function CollaboratorLayout() {
  
  return (
    <div className="App">
      <Header forWho="Colaborador"></Header>
      <div className="content">
        <Outlet></Outlet>
      </div>
       <FooterMenu forWho="Colaborador"></FooterMenu>
    </div>
  );
}
