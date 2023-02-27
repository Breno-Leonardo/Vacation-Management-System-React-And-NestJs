import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./ThirteenthPageCollaborator.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Button } from "../../components/Button";

export function ThirteenthPageCollaborator() {
  return (
    <div className="App">
      <Header forWho="Colaborador"></Header>
      <div className="content">
        <Container title="Solicitar Décimo Terceiro ">
          <></>
          <div className={styles.divRequest}>
            <p>Gostaria de antecipar seu décimo terceiro ?</p>
            <Button content="SOLICITAR" size="Big"></Button>
          </div>
         
        </Container>
      </div>
    </div>
  );
}
