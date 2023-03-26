import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./css/NewRequestPage.module.css";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import calendar from "../../assets/calendar-month-outline-black.svg";
import { useEffect } from "react";
import { URL_GET_ALL_COLLABORATORS } from "../../constants/constants";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useRequests } from "../../hooks/useRequests";

export function NewRequestPage() {
  const { collaborator } = useGlobalContext();
  const { getRequest } = useRequests();

  useEffect(() => {
    async () =>
      await getRequest(
        URL_GET_ALL_COLLABORATORS + "/" + collaborator?.matricula
      )
        .then((result) => {})
        .catch(() => {});
  }, []);
  
  return (
    <Container title="Solicitação">
      <div className={styles.infos}>
        <div className={styles.infosContent}>
          <span>Data de Início</span>
          <Input
            icon={calendar}
            placeholder="dd/mm/aaaa"
            type="date"
            sizeInput="Medium"
            width="Medium"
          ></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Dias</span>
          <Select
            sizeSelect="Medium"
            width="Medium"
            optionsUnique={[5, 10, 15, 20, 30]}
          ></Select>
        </div>
        <div className={styles.infosContent}>
          <span>Data de Término</span>
          <Input
            icon={calendar}
            placeholder="Insira o início"
            type="text"
            sizeInput="Medium"
            width="Medium"
            disabled={true}
          ></Input>
        </div>
      </div>

      <TextArea placeholder="Digite uma mensagem para o gestor, caso necessário"></TextArea>

      <Button content="SOLICITAR" size="Big"></Button>
    </Container>
  );
}
