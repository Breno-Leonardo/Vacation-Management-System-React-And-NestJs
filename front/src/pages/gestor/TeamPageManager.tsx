import { Container } from "../../components/Container";
import styles from "./TeamPageManager.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Select } from "../../components/Select";
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


export function TeamPageManager() {
  return (
        <Container title="Time" >
          <div className={styles.divSearch}>
            <span>Time: </span>
            <Select  sizeSelect="Medium" width="Medium" optionsDouble={[["123","Front-end"],["456","QQTech"]]}></Select>
          </div>
          <div className={styles.topics}>
            <p>Nome</p>
            <p>Saldo</p>
            <p>Período Aquisitivo</p>
            <p>Período Concessivo</p>
            <p>Data Limite Concessiva</p>
          </div>

          {funcionarios.map((f) => {
            
            return (
              <EmployeeLine
                key={f.nome+f.dataLimiteConcessiva}
                fields={[f.nome,f.saldo,f.periodoConcessivo,f.periodoAquisitivo,f.dataLimiteConcessiva]}
                attentionFlag={f.attentionFlag}
              ></EmployeeLine>
            );
          })}
        </Container>
      
    
  );
}
