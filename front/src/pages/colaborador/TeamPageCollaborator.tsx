import {Header} from "../../components/Header";
import {Container} from "../../components/Container";
import styles from "./css/TeamPageCollaborator.module.css";
import {EmployeeLine} from "../../components/EmployeeLine";
import {Topics} from "../../components/Topics";
import { formatDateRequestTopic, formatNameForMobile } from "../../functions/auxFunctions";

const solicitacao = {
  nome: "Breno Leonardo",
  dataSolicitacao: "15/01/22",
  inicio: "17/01/22",
  fim: "27/01/22",
  status: "Em Aberto",
  dataLimiteConcessiva: "26/02/22",
  attentionFlag: false,
};

const solicitacoes = [solicitacao, solicitacao, solicitacao];

export function TeamPageCollaborator() {
  return (
    <Container title="Solicitações e Férias do Time">
      <Topics fields={["Nome", formatDateRequestTopic(), "Início", "Fim", "Status"]} position="spaced"></Topics>

      {solicitacoes.map((f) => {
        return <EmployeeLine key={f.nome + f.dataLimiteConcessiva} fields={[formatNameForMobile(f.nome), f.dataSolicitacao, f.inicio, f.fim, f.status]} colorsFields={["black", "white", "green", "red", "blue"]} attentionFlag={f.attentionFlag}></EmployeeLine>;
      })}
    </Container>
  );
}
