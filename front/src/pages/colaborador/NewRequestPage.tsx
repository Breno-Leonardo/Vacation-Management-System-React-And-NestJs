import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./NewRequestPage.module.css";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import calendar from "../../assets/calendar-month-outline-black.svg";

export function NewRequestPage() {
  return (
    
        <Container title="Solicitação">
          <div className={styles.infos}>
            <div className={styles.infosContent}>
              <span>Data de Início</span>
              <Input icon={calendar} placeholder="dd/mm/aaaa" type="date" size="Medium"></Input>

            </div>
            <div className={styles.infosContent}>
              <span>Dias</span>
              <Select size="Medium" optionsUnique={[5,10,15,20,30]}></Select>
            </div>
            <div className={styles.infosContent}>
              <span>Data de Término</span>
              <Input icon={calendar} placeholder="Insira o início" type="text" size="Medium" disabled={true}></Input>
            </div>
          </div>

          <TextArea placeholder="Digite uma mensagem para o fucionário, caso necessário"></TextArea>

          <Button content="SOLICITAR" size="Big"></Button>
        </Container>
      
  );
}
