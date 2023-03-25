import {Container} from "../../components/Container";
import styles from "./css/HistoryRequestPageManager.module.css";
import {EmployeeLine} from "../../components/EmployeeLine";
import {Select} from "../../components/Select";
import {formatDateRequestTopic, formatNameForMobile} from "../../functions/auxFunctions";
import {Topics} from "../../components/Topics";

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
    dataSolicitacao: "15/01/23",
    inicio: "17/01/23",
    fim: "27/01/23",
    status: " Aprovada",
  },
  {
    nome: "Breno Leonardo",
    dataSolicitacao: "15/01/23",
    inicio: "17/01/23",
    fim: "27/01/23",
    status: " Aprovada",
  },
];

export function HistoryRequestsPageManager() {
  return (
    <Container title="Histórico de solicitações">
      <></>

      <div className={styles.divSearch}>
        <div>
          <span>Time: </span>
          <Select
            sizeSelect="Medium"
            width="Medium"
            optionsDouble={[
              ["123", "Front-end"],
              ["456", "QQTech"],
            ]}
          ></Select>
        </div>
        <div>
          <span>Funcionário: </span>
          <Select sizeSelect="Medium" optionsDouble={options}></Select>
        </div>
      </div>
      <Topics fields={["Nome", formatDateRequestTopic(), "Início", "Fim", "Status"]} position="spaced"></Topics>

      {solicitacoes.map((soli) => {
        return <EmployeeLine fields={[formatNameForMobile(soli.nome), soli.dataSolicitacao, soli.inicio, soli.fim, soli.status]} colorsFields={["black", "black", "green", "red", "black"]}></EmployeeLine>;
      })}
    </Container>
  );
}
