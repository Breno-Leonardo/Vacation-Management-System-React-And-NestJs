import { Container } from "../../components/Container";
import styles from "./css/ResponsePageManager.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { formatNameForMobile } from "../../functions/auxFunctions";
import { Topics } from "../../components/Topics";

const solicitacao = {
  nome: "Breno Leonardo",
  dataSolicitacao: "15/01/2022",
  inicio: "17/01/2022",
  fim: "27/01/2022",
  dataLimiteConcessiva: "26/02/2022",
  attentionFlag: false,
};
const solicitacao2 = {
  nome: "Sofia Lima",
  dataSolicitacao: "15/01/2022",
  inicio: "19/01/2022",
  fim: "29/01/2022",
  dataLimiteConcessiva: "26/02/2022",
  attentionFlag: true,
};

const solicitacoes = [solicitacao, solicitacao2];

export function ResponsePageManager() {
  return (
    <>
      <Container title="Interseções de Férias">
        
        <Topics fields={["Nome", "Início", "Fim"]} position="center"></Topics>

        

        {solicitacoes.map((f) => {
          return (
            <EmployeeLine
              fields={[formatNameForMobile(f.nome), f.inicio, f.fim]}
              colorsFields={["black", "green", "red"]}
              position="center"
            ></EmployeeLine>
          );
        })}
      </Container>

      <Container title="Solicitação">
        <div className={styles.infos}>
          <div className={styles.infoPrimary}>Nome: {formatNameForMobile(solicitacao.nome)}</div>
          <div className={styles.infoSecondary}>
            Cargo: Desenvolvedor Mobile
          </div>
        </div>
        <div className={styles.infos}>
          <span className={styles.infoPrimary}>Data Início: 07/07/2022</span>
          <span className={styles.infoSecondary}>Data Término: 17/07/2022</span>
        </div>
        <div className={styles.infos}>
          <span className={styles.infoPrimary}>Saldo Restante De Dias: 20</span>
          <span className={styles.infoSecondary}>
            Data Limite Concessiva: 17/07/2022
          </span>
        </div>
        <TextArea placeholder="Digite uma mensagem para o fucionário, caso necessário"></TextArea>
        <div className={styles.divForButton}>
          <Button content="Aprovar" size="Big"></Button>
          <Button content="Reprovar" size="Big" color="Red"></Button>
        </div>
      </Container>
    </>
  );
}
