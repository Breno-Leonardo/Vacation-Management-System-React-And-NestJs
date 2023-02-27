import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./RegisterCollaboratorPage.module.css";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import calendar from "../../assets/calendar-month-outline-black.svg";

export function RegisterCollaboratorPage() {
  return (
    <div className="App">
      <Header forWho="RH"></Header>

      <div className="content">
        <Container title="Cadastro de Funcionário">
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
              <span>Data admissão</span>
              <Input  placeholder="dd/mm/aaaa" type="date" size="Small"></Input>
            </div>
          </div>
          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Cargo</span>
              <Select optionsUnique={["Desenvolvedor", "Analista", "Design"]}></Select>

            </div>
            <div className={styles.infosContent}>
              <span>E-mail</span>
              <Input  placeholder="E-mail" type="text" size="Small"></Input>
            </div>
          </div>
          
          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Gestor</span>
              <Select optionsUnique={["Gestor 1", "Gestor 2", "Gestor 3"]}></Select>

            </div>
            <div className={styles.infosContent}>
              <span>Antecipou 13º Salário Esse Ano</span>
              <Select optionsUnique={["Sim", "Não"]}></Select>
            </div>
          </div>
          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Modelo de contratação</span>
              <Select optionsUnique={["CLT", "PJ"]}></Select>

            </div>
            <div className={styles.infosContent}>
              <span>Saldo atual de dias para férias</span>
              <Select optionsUnique={[5, 10, 15,20,25,30]}></Select>

            </div>
          </div>

          <Button content="CADASTRAR" size="Big"></Button>
        </Container>
      </div>
    </div>
  );
}
