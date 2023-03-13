import { Container } from "../../components/Container";
import styles from "./RegisterPage.module.css";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

export function RegisterCollaboratorPage() {
  return (
    <Container title="Cadastro de Funcionário">
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Nome</span>
          <Input placeholder="Nome" type="text" size="Small"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>CPF</span>
          <Input placeholder="CPF" type="text" size="Small"></Input>
        </div>
      </div>

      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Matrícula</span>
          <Input placeholder="Matrícula" type="text" size="Small"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Senha</span>
          <Input placeholder="Senha" type="text" size="Small"></Input>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Cargo</span>
          <Input placeholder="Cargo" type="text" size="Small"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>E-mail</span>
          <Input placeholder="E-mail" type="text" size="Small"></Input>
        </div>
      </div>

      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Matrícula do gestor</span>
          <Input
            placeholder="Matrícula do gestor"
            type="text"
            size="Small"
          ></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Time</span>
          <Select optionsUnique={["Mobile", "QQTech"]}></Select>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Data admissão</span>
          <Input placeholder="dd/mm/aaaa" type="date" size="Small"></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Saldo atual de dias para férias</span>
          <Select optionsUnique={[0, 5, 10, 15, 20, 25, 30]}></Select>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Modelo de contratação</span>
          <Select optionsUnique={["CLT", "PJ"]}></Select>
        </div>
        <div className={styles.infosContent}>
          <span>Data do ultimo 13º Salário</span>
          <Input placeholder="dd/mm/aaaa" type="date" size="Small"></Input>
        </div>
      </div>

      <Button content="CADASTRAR" size="Big"></Button>
    </Container>
  );
}
