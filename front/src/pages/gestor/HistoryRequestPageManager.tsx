import { Container } from "../../components/Container";
import styles from "./HistoryRequestPageManager.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Select } from "../../components/Select";

const options = [
  ["123", "Breno"],
  ["456", "Sofia"],
  ["789", "Adriana"],
];

interface solicitacao {
  nome: string;
  dataSolicitacao: string;
  inicio: string;
  fim: string;
  status: string;
}
const solicitacoes = [
  {
    nome: "Breno Leonardo",
    dataSolicitacao: "15/01/2023",
    inicio: "17/01/2023",
    fim: "27/01/2023",
    status: " Aprovada",
  },
  {
    nome: "Breno Leonardo",
    dataSolicitacao: "15/01/2023",
    inicio: "17/01/2023",
    fim: "27/01/2023",
    status: " Aprovada",
  },
];

export function HistoryRequestsPageManager() {
  return (
    <Container title="Histórico de solicitações">
      <></>

      <div className={styles.divSearch}>
        <span>Time: </span>
        <Select
        size="Medium"
          optionsDouble={[
            ["123", "Front-end"],
            ["456", "QQTech"],
          ]}
        ></Select>
        <span>Funcionário: </span>
        <Select size="Medium" optionsDouble={options}></Select>
      </div>

      <div className={styles.topics}>
        <p>Nome</p>
        <p>Data Solicitação</p>
        <p>Início</p>
        <p>Fim</p>
        <p>Status</p>
      </div>
      {solicitacoes.map((soli) => {
        return (
          <EmployeeLine
            fields={[
              soli.nome,
              soli.dataSolicitacao,
              soli.inicio,
              soli.fim,
              soli.status,
            ]}
            colorsFields={["black", "black", "green", "red", "black"]}
          ></EmployeeLine>
        );
      })}
    </Container>
  );
}
