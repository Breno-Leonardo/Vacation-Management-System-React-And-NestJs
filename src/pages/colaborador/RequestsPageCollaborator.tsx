import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./RequestsPageCollaborator.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

const solicitacao = {
  nome: "Breno Leonardo",
  dataSolicitacao: "15/01/2022",
  inicio: "17/01/2022",
  fim: "27/01/2022",
  status: "Em Aberto",
  dataLimiteConcessiva: "26/02/2022",
  attentionFlag: false,
};

const solicitacoes = [
  solicitacao,
  solicitacao,
  solicitacao,
  solicitacao,
  solicitacao,
];

export function RequestsPageCollaborator() {
  return (
    <div className="App">
      <Header forWho="Colaborador"></Header>

      <div className="content">
        <div className={styles.divCards}>
          <Card content="30" size="Medium" title="Saldo De Dias"></Card>
          <Card
            content=""
            initialDateContent="07/07/2022"
            size="Medium"
            title="Período Aquisitivo"
          ></Card>
          <Card
            content=""
            initialDateContent="07/07/2023"
            size="Medium"
            title="Período Concessivo"
          ></Card>
        </div>

        <Container title="Solicitações">
          <div className={styles.topicsCenter}>
            <p>Data Solicitação</p>
            <p>Início</p>
            <p>Fim</p>
            <p>Status</p>
          </div>

          {solicitacoes.map((f) => {
            return (
              <EmployeeLine
                fields={[f.dataSolicitacao, f.inicio, f.fim, f.status]}
                colorsFields={["black", "green", "red"]}
                positionCenter="center"
                hasIcon={false}
              ></EmployeeLine>
            );
          })}
          <Link to="/pagina-nova-solicitacao">
            <Button content="Nova Solicitação" size="ExtraBig"></Button>
          </Link>
        </Container>
      </div>
    </div>
  );
}
