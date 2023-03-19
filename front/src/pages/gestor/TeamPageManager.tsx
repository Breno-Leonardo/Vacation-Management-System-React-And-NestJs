import { Container } from "../../components/Container";
import styles from "./css/TeamPageManager.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Select } from "../../components/Select";
import { formatName } from "../../auxFunctions";
import { Topics } from "../../components/Topics";
const funcionario = {
  nome: "Breno Leonardo",
  saldo: "10",
  periodoAquisitivo: "17/01/23 até 17/01/24",
  periodoConcessivo: "17/01/22 \n até \n 17/01/23",
  dataLimiteConcessiva: "07/01/22",
  attentionFlag: true,
};
const funcionario2 = {
  nome: "Sofia Lima",
  saldo: "0",
  periodoAquisitivo: "17/01/23 até 17/01/24",
  periodoConcessivo: "17/01/22 \n até \n 17/01/23",
  dataLimiteConcessiva: "07/01/22",
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
          <Topics fields={["Nome", "Saldo", "Período Aquisitivo", "Período Concessivo","Limite Concessivo"]} position="spaced"></Topics>
          

          {funcionarios.map((f) => {
            
            return (
              <EmployeeLine
                key={f.nome+f.dataLimiteConcessiva}
                fields={[formatName(f.nome),f.saldo,f.periodoConcessivo,f.periodoAquisitivo,f.dataLimiteConcessiva]}
                attentionFlag={f.attentionFlag}
              ></EmployeeLine>
            );
          })}
        </Container>
      
    
  );
}
