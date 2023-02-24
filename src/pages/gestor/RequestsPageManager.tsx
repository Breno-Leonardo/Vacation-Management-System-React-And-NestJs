import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./RequestsPageManager.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";

const funcionario = {
  nome: "Breno Leonardo",
  saldo: "10",
  periodoAquisitivo: "17/01/2023 até 17/01/2024",
  periodoConcessivo: "17/01/2022 \n até \n 17/01/2023",
  dataLimiteConcessiva: "07/01/2022",
  attentionFlag: true,
};
const funcionario2 = {
  nome: "Sofia Lima",
  saldo: "0",
  periodoAquisitivo: "17/01/2023 até 17/01/2024",
  periodoConcessivo: "17/01/2022 \n até \n 17/01/2023",
  dataLimiteConcessiva: "07/01/2022",
  attentionFlag: false,
};

const funcionarios = [
  funcionario,
  funcionario2,
  funcionario,
  funcionario2,
  funcionario,
];

export function RequestsPageManager() {
  return (
    <div className="App">
      <Header forWho="Gestor"></Header>

      <div className="content">
        <Container title="Solicitações" >
          <div className={styles.topicsWithButton}>
            <p>Nome</p>
            <p>Data da Solicitação</p>
            <p>Início</p>
            <p>Fim</p>
            <p>Data Limite Concessiva</p>
          </div>

          {funcionarios.map((f) => {
            return (
              <div className={styles.divForButton}>
                <EmployeeLine
                  fields={[f.nome,f.saldo,f.periodoConcessivo,f.periodoAquisitivo,f.dataLimiteConcessiva]}
                  attentionFlag={f.attentionFlag}
                ></EmployeeLine>
                <button>sadasd</button>
              </div>
              
            );
          })}
        </Container>

        <Container title="Funcionários de férias" >
          <div className={styles.topicsCenter}>
            <p>Nome</p>
            <p>Início</p>
            <p>Fim</p>
          </div>

          {funcionarios.map((f) => {
            return (
              <EmployeeLine
              fields={[f.nome,f.periodoConcessivo,f.dataLimiteConcessiva]}
              colorsFields={["black","green","red"]}
              attentionFlag={f.attentionFlag}
              positionCenter="center"
              ></EmployeeLine>
              
            );
          })}
          
        </Container>

        <Container title="Férias agendadas" >
          <div className={styles.topicsCenter}>
            <p>Nome</p>
            <p>Início</p>
            <p>Fim</p>
          </div>

          {funcionarios.map((f) => {
            return (
              <EmployeeLine
                fields={[f.nome,f.periodoConcessivo,f.dataLimiteConcessiva]}
                colorsFields={["black","green","red"]}
                attentionFlag={f.attentionFlag}
                positionCenter="center"
              ></EmployeeLine>
            );
          })}
        </Container>
      </div>
    </div>
  );
}
