import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./RequestsPageManager.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { StandardTooltipContent } from "../../components/Tooltip";

const solicitacao = {
  nome: "Breno Leonardo",
  dataSolicitacao: "15/01/2022",
  inicio: "17/01/2022",
  fim: "27/01/2022",
  dataLimiteConcessiva: "26/02/2022", 
  attentionFlag:false
};
const solicitacao2 = {
  nome: "Sofia Lima",
  dataSolicitacao: "15/01/2022",
  inicio: "17/01/2022",
  fim: "27/01/2022",
  dataLimiteConcessiva: "26/02/2022",
  attentionFlag:true
};

const solicitacoes = [
  solicitacao,
  solicitacao2,
  solicitacao,
  solicitacao2,
  solicitacao,
];
const tasks: Task[] = [
  {
    start: new Date(2020, 0, 1),// mes é -1 o mes normal (janeiro = 0)
    end: new Date(2020, 0, 20),
    name: 'Breno Leonardo',
    id: 'Task 0',
    type:'task',
    progress: Math.ceil((Math.abs(new Date(2020, 1, 1).getTime() - new Date(2020, 1, 20).getTime())) / (1000 * 3600 * 24)),
    isDisabled: true,
    
  },
  {
    start: new Date(2020, 0, 15),
    end: new Date(2020, 0, 30),
    name: 'Sofia Lima',
    id: 'Task 0',
    type:'task',
    progress: Math.ceil((Math.abs(new Date(2020, 1, 1).getTime() - new Date(2020, 1, 20).getTime())) / (1000 * 3600 * 24)),
    isDisabled: false,
    
  },
  {
    start: new Date(2020, 2, 15),
    end: new Date(2020, 2, 30),
    name: 'Sofia Lima',
    id: 'Task 0',
    type:'task',
    progress: Math.ceil((Math.abs(new Date(2020, 1, 1).getTime() - new Date(2020, 1, 20).getTime())) / (1000 * 3600 * 24)),
    isDisabled: true,
    
  },
];


export function RequestsPageManager() {
  return (
    <div className="App">
      <Header forWho="Gestor"></Header>
      <div className="content">
      
        <div className={styles.divCards}>
          <Card content="3" size="Medium" title="Funcionários de férias"></Card>
          <Card content="3" size="Medium" title="Solicitações"></Card>
          <Card content="4" size="Medium" title="Férias agendadas"></Card>
        </div>
        <div className={styles.divGantt}>
        <Gantt
          tasks={tasks}
          viewMode={ViewMode.Day}
          headerHeight={100}
          locale={"pt"}
          columnWidth={70}
          listCellWidth={""}
          barBackgroundColor="#33a457"
          barBackgroundSelectedColor="#33a457"
          barProgressColor="#33a457"
          barProgressSelectedColor="#33a457"
          fontSize="16"
          onSelect={()=>console.log("dasd")}
          TooltipContent={StandardTooltipContent}
        />
      </div>
        <Container title="Solicitações">
          <div className={styles.topicsWithButton}>
            <p>Nome</p>
            <p>Data da Solicitação</p>
            <p>Início</p>
            <p>Fim</p>
            <p>Data Limite Concessiva</p>
          </div>

          {solicitacoes.map((f) => {
            return (
              <div className={styles.divForButton}>
                <EmployeeLine
                  fields={[
                    f.nome,
                    f.dataSolicitacao,
                    f.inicio,
                    f.fim,
                    f.dataLimiteConcessiva
                  ]}
                  colorsFields={["black", "black", "greee", "red", "blue"]}
                  attentionFlag={f.attentionFlag}
                ></EmployeeLine>
                <Link to="/pagina-de-resposta-gestor"><Button content="Responder" size="Small"></Button></Link>
              </div>
            );
          })}
        </Container>

        <Container title="Funcionários de férias">
          <div className={styles.topicsCenter}>
            <p>Nome</p>
            <p>Início</p>
            <p>Fim</p>
          </div>

          {solicitacoes.map((f) => {
            return (
              <EmployeeLine
                fields={[f.nome, f.inicio, f.fim]}
                colorsFields={["black", "green", "red"]}
                positionCenter="center"
              ></EmployeeLine>
            );
          })}
        </Container>

        <Container title="Férias agendadas">
          <div className={styles.topicsCenter}>
            <p>Nome</p>
            <p>Início</p>
            <p>Fim</p>
          </div>

          {solicitacoes.map((f) => {
            return (
              <EmployeeLine
                fields={[f.nome, f.inicio, f.fim]}
                colorsFields={["black", "green", "red"]}
                positionCenter="center"
              ></EmployeeLine>
            );
          })}
          
        </Container>
      </div>
    </div>
  );
}
