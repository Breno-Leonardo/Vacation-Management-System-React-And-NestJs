import { Container } from "../../components/Container";
import styles from "./RegisterPage.module.css";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function RegisterTeamPage() {
  return (
   
        <Container title="Cadastro de Time">
          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Nome do time</span>
              <Input  placeholder="Nome" type="text" size="Medium"></Input>

            </div>
            <div className={styles.infosContent}>
              <span>Matrícula do Gestor</span>
              <Input  placeholder="Matrícula" type="text" size="Medium"></Input>

            </div>
          </div>

          <Button content="CADASTRAR" size="Big"></Button>
        </Container>
      
  );
}
