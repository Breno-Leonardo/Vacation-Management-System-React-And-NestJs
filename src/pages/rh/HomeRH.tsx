import { Header } from "../../components/Header";
import styles from "./HomeRH.module.css";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";
import collaborator from "../../assets/account-white.svg";
import manager from "../../assets/account-tie.svg";
import remove from "../../assets/account-remove.svg";
export function HomeRH() {
  return (
    <div className="App">
      <Header forWho="RH"></Header>
      <div className="content">
      
        <div className={styles.divCards}>
          <Link to="/">
            <Card icon={collaborator} content="" size="Medium" title="Cadastrar Fucionário"></Card>
          </Link>
          <Link>
            <Card icon={manager} content="" size="Medium" title="Cadastrar Gestor"></Card>
          </Link>
          <Link>
            <Card icon={remove} content="" size="Medium" title="Remover" color="Red"></Card>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
