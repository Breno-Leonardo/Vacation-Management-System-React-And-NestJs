import { Container } from "../../components/Container";
import styles from "./RegisterPage.module.css";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

export function RegisterManagerPage() {
  return (
   
        <Container title="Cadastro de Gestor">
          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Nome</span>
              <Input  placeholder="Nome" type="text" size="Small"></Input>

            </div>
            <div className={styles.infosContent}>
              <span>CPF</span>
              <Input  placeholder="CPF" type="text" size="Small"></Input>
            </div>
          </div>

          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Matrícula</span>
              <Input  placeholder="Matrícula" type="text" size="Small"></Input>

            </div>
            <div className={styles.infosContent}>
            <span>Senha</span>
              <Input  placeholder="Senha" type="text" size="Small"></Input>
            </div>

          </div>
          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Cargo</span>
              <Input  placeholder="Cargo" type="text" size="Small"></Input>

            </div>
            <div className={styles.infosContent}>
            <span>E-mail</span>
              <Input  placeholder="E-mail" type="text" size="Small"></Input>

            </div>
          </div>
          
          
          

          <Button content="CADASTRAR" size="Big"></Button>
        </Container>
      
  );
}
