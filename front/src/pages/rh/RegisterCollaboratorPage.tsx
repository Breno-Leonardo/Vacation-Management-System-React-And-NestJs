import { Container } from "../../components/Container";
import styles from "./RegisterPage.module.css";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

export function RegisterCollaboratorPage() {
  return (
    <Container title="Cadastro de Colaborador">
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Nome</span>
          <Input placeholder="Nome" type="text" sizeInput="Medium"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>CPF</span>
          <Input placeholder="CPF" type="text" sizeInput="Medium"></Input>
        </div>
      </div>

      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Matrícula</span>
          <Input placeholder="Matrícula" type="text" sizeInput="Medium"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Senha</span>
          <Input placeholder="Senha" type="text" sizeInput="Medium"></Input>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>E-mail</span>
          <Input placeholder="E-mail" type="text" sizeInput="Medium"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Gmail</span>
          <Input placeholder="Gmail" type="text" sizeInput="Medium"></Input>
        </div>
      </div>

      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Matrícula do gestor</span>
          <Input
            placeholder="Matrícula do gestor"
            type="text"
            sizeInput="Medium"
          ></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Time</span>
          <Select sizeSelect="Medium" optionsUnique={["Mobile", "QQTech"]}></Select>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Data admissão</span>
          <Input placeholder="dd/mm/aaaa" type="date" sizeInput="Medium"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Cargo</span>
          <Input placeholder="Cargo" type="text" sizeInput="Medium"></Input>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Modelo de contratação</span>
          <Select sizeSelect="Medium" optionsUnique={["CLT", "PJ"]}></Select>
        </div>
        <div className={styles.infosContent}>
          <span>Data do ultimo 13º Salário</span>
          <Input placeholder="dd/mm/aaaa" type="date" sizeInput="Medium"></Input>
        </div>
      </div>
      <div className={styles.infos}>
        
        <div className={styles.infosContent}>
          <span>Fim aquisitivo atual</span>
          <Input placeholder="dd/mm/aaaa" type="date" sizeInput="Medium"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Saldo atual de dias para férias</span>
          <Select sizeSelect="Medium" optionsUnique={[0, 5, 10, 15, 20, 25, 30]}></Select>
        </div>
      </div>

      <Button content="CADASTRAR" size="Big"></Button>
    </Container>
  );
}
