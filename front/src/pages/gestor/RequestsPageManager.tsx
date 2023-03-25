import {Container} from "../../components/Container";
import styles from "./css/RequestsPageManager.module.css";
import {EmployeeLine} from "../../components/EmployeeLine";
import {Button} from "../../components/Button";
import {Card} from "../../components/Card";
import {Link} from "react-router-dom";
import {Gantt, Task, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import {StandardTooltipContent} from "../../components/Tooltip";
import {Select} from "../../components/Select";
import {Topics} from "../../components/Topics";
import {formatDateRequestTopic, formatNameForMobile} from "../../functions/auxFunctions";
import React from "react";

const solicitacao = {
  nome: "Breno Leonardo",
  dataSolicitacao: "15/01/22",
  inicio: "17/01/22",
  fim: "27/01/22",
  dataLimiteConcessiva: "26/02/22",
  attentionFlag: false,
};
const solicitacao2 = {
  nome: "Sofia Lima",
  dataSolicitacao: "15/01/2022",
  inicio: "17/01/2022",
  fim: "27/01/2022",
  dataLimiteConcessiva: "26/02/2022",
  attentionFlag: true,
};

const solicitacoes = [solicitacao, solicitacao2, solicitacao, solicitacao2, solicitacao];
const tasks: Task[] = [
  {
    start: new Date(2020, 0, 1), // mes é -1 o mes normal (janeiro = 0)
    end: new Date(2020, 0, 20),
    name: "Breno Leonardo",
    id: "Task 0",
    type: "task",
    progress: Math.ceil(Math.abs(new Date(2020, 1, 1).getTime() - new Date(2020, 1, 20).getTime()) / (1000 * 3600 * 24)),
    isDisabled: true,
  },
  {
    start: new Date(2020, 0, 15),
    end: new Date(2020, 0, 30),
    name: "Sofia Lima",
    id: "Task 0",
    type: "task",
    progress: Math.ceil(Math.abs(new Date(2020, 1, 1).getTime() - new Date(2020, 1, 20).getTime()) / (1000 * 3600 * 24)),
    isDisabled: false,
  },
  {
    start: new Date(2020, 2, 15),
    end: new Date(2020, 2, 30),
    name: "Sofia Lima",
    id: "Task 0",
    type: "task",
    progress: Math.ceil(Math.abs(new Date(2020, 1, 1).getTime() - new Date(2020, 1, 20).getTime()) / (1000 * 3600 * 24)),
    isDisabled: true,
  },
];

export function RequestsPageManager() {
  const [viewMode, setViewMode] = React.useState(ViewMode.Day);
  const [columnWidth, setColumnWidth] = React.useState(window.innerWidth / 20);
  return (
    <>
      <div className={styles.divSearch}>
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
      <div className={styles.divCards}>
        <Card content="3" size="Medium" title="Em Férias"></Card>
        <Card content="3" size="Medium" title="Solicitações"></Card>
        <Card content="4" size="Medium" title="Férias agendadas"></Card>
        <Card content="1" size="Medium" title="Em alerta"></Card>
      </div>
      <div className={styles.divGantt}>
        <div className={styles.divGanttButtons}>
          <Button content="Dias" size="Small" onClick={() => {
            setViewMode(ViewMode.Day)
            setColumnWidth(window.innerWidth / 20)
          }}></Button>
          <Button content="Meses" size="Small" onClick={() => {
            setViewMode(ViewMode.Month)
            setColumnWidth(window.innerWidth / 9)
            }}></Button>
        </div>
        <div className={styles.divShadowBorder}>
          <Gantt
            tasks={tasks}
            viewMode={viewMode}
            headerHeight={100}
            locale={"pt"}
            columnWidth={columnWidth}
            listCellWidth={""}
            barBackgroundColor="#33a457"
            barBackgroundSelectedColor="#33a457"
            barProgressColor="#33a457"
            barProgressSelectedColor="#33a457"
            fontSize="16"
            onSelect={() => console.log()}
          />
        </div>
      </div>
      <div className={styles.divGanttMobile}>
        <Gantt tasks={tasks} viewMode={ViewMode.Month} headerHeight={50} locale={"pt"} columnWidth={70} listCellWidth={""} barBackgroundColor="#33a457" barBackgroundSelectedColor="#33a457" barProgressColor="#33a457" barProgressSelectedColor="#33a457" fontSize="12" onSelect={() => console.log()} />
      </div>
      <Container title="Solicitações">
        <div className={styles.divForButton}>
          <Topics fields={["Nome", formatDateRequestTopic(), "Início", "Fim", "Data Limite Concessiva"]} position="spaced"></Topics>
          <div className={styles.buttonRequest}>
            <Button content="Responder" size="Small" visibility="Invisible" onClick={() => {}}></Button>
          </div>
        </div>

        {solicitacoes.map((f) => {
          return (
            <div className={styles.divForButton}>
              <div className={styles.divLink}>
                <Link to="/gestor/resposta">
                  <EmployeeLine fields={[formatNameForMobile(f.nome), f.dataSolicitacao, f.inicio, f.fim, f.dataLimiteConcessiva]} colorsFields={["black", "black", "greee", "red", "blue"]} attentionFlag={f.attentionFlag}></EmployeeLine>
                </Link>
              </div>
              <div className={styles.buttonRequest}>
                <Link to="/gestor/resposta">
                  <Button content="Responder" size="Small"></Button>
                </Link>
              </div>
            </div>
          );
        })}
      </Container>

      <Container title="Funcionários de férias">
        <Topics fields={["Nome", "Início", "Fim"]} position="center"></Topics>

        {solicitacoes.map((f) => {
          return <EmployeeLine fields={[formatNameForMobile(f.nome), f.inicio, f.fim]} colorsFields={["black", "green", "red"]} position="center"></EmployeeLine>;
        })}
      </Container>

      <Container title="Férias agendadas">
        <Topics fields={["Nome", "Início", "Fim"]} position="center"></Topics>

        {solicitacoes.map((f) => {
          return <EmployeeLine fields={[formatNameForMobile(f.nome), f.inicio, f.fim]} colorsFields={["black", "green", "red"]} position="center"></EmployeeLine>;
        })}
      </Container>
    </>
  );
}
