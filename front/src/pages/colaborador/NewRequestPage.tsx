import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./css/NewRequestPage.module.css";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import calendar from "../../assets/calendar-month-outline-black.svg";
import { useEffect, useState } from "react";
import {
  URL_CREATE_VACATION_REQUEST,
  URL_GET_ALL_COLLABORATORS,
} from "../../constants/constants";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useRequests } from "../../hooks/useRequests";
import { formatDate, formatDateForUTC } from "../../functions/auxFunctions";
import { VacationRequestBody } from "../../types/VacationRequestType";

export function NewRequestPage() {
  const [optionsDays, setOptionsDays] = useState([5, 10, 15, 20, 30]);
  const { collaborator } = useGlobalContext();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [collaboratorMessage, setCollaboratorMessage] = useState("");
  const [numberDays, setNumberDays] = useState(optionsDays[0]);
  const { postRequest } = useRequests();
  useEffect(() => {
    if (collaborator?.saldoDiasFerias == 15) {
      setOptionsDays([15]);
      setNumberDays(15);
    } else if (collaborator?.saldoDiasFerias == 20) {
      setOptionsDays([5, 20]);
      setNumberDays(5);
    }
  }, [collaborator]);

  const handleRequest = async () => {
    let currentDate = new Date(Date.now());
    if (startDate != undefined && startDate > currentDate) {
      const request = await postRequest<VacationRequestBody>(
        URL_CREATE_VACATION_REQUEST,
        {
          dataSolicitacao: currentDate,
          dataInicio: startDate,
          dataTermino: endDate,
          mensagemColaborador: collaboratorMessage,
          mensagemGestor: "",
          statusSolicitacao: "Em Aberto",
          colaborador: collaborator?.matricula,
        }
      ).then((response) => {
        window.location.href = window.location.href.replace(
          "nova-solicitacao",
          ""
        );
      });
      request;
    } else {
    }
  };

  const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value != "") {
      //current date +1 day for min in input
      const minDate = new Date(Date.now());
      minDate.setUTCDate(minDate.getUTCDate() + 1);
      const dateSelected = new Date(event.target.value);
      const diff = dateSelected.getTime() - minDate.getTime();
      console.log("diff", diff);
      if (diff > 0) {
        console.log("data min", minDate, "data select", dateSelected);
        setStartDate(new Date(event.target.value));
        const dateEnd = new Date(event.target.value);
        dateEnd.setDate(dateEnd.getDate() + numberDays);
        setEndDate(dateEnd);
      }
    }
  };
  const handleNumberOfDays = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberDays(parseInt(event.target.value));
  };
  const handleCollaboratorMessage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCollaboratorMessage(event.target.value);
  };

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
            onChange={handleStartDate}
            onKeyDown={(event) => {
              event.preventDefault();
            }}
          ></Input>
        </div>
        <div className={styles.infosContent}>
          <span>Dias</span>
          <Select
            sizeSelect="Medium"
            width="Medium"
            optionsUnique={optionsDays}
            onChange={handleNumberOfDays}
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
            onChange={handleCollaboratorMessage}
            value={
              endDate != undefined ? formatDate(endDate.toUTCString()) : ""
            }
          ></Input>
        </div>
      </div>

      <TextArea placeholder="Digite uma mensagem para o gestor, caso necessário"></TextArea>

      <Button onClick={handleRequest} content="SOLICITAR" size="Big"></Button>
    </Container>
  );
}
