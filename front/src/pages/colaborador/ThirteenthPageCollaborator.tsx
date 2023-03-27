import { Container } from "../../components/Container";
import styles from "./css/ThirteenthPageCollaborator.module.css";
import { Button } from "../../components/Button";
import { ThirteenthRequestBody } from "../../types/CreateThirteenthRequestType";
import { useRequests } from "../../hooks/useRequests";
import {
  URL_CREATE_THIRTEENTH_REQUEST,
  URL_GET_ALL_THIRTEENTH_REQUEST,
} from "../../constants/constants";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export function ThirteenthPageCollaborator() {
  const { postRequest, getRequest } = useRequests();
  const { collaborator } = useGlobalContext();

  const handleRequest = async () => {
    let currentDate = new Date(Date.now());

    const getHistoryRequests = async () =>
      await getRequest(
        URL_GET_ALL_THIRTEENTH_REQUEST + "/" + collaborator?.matricula
      ).then((response) => {
        //search current year in history requests
        if (
          JSON.stringify(response).indexOf(
            currentDate.getUTCFullYear().toString() + "-"
          ) == -1
        ) {
          const createRequest = async () =>
          await postRequest<ThirteenthRequestBody>(URL_CREATE_THIRTEENTH_REQUEST, {
            dataSolicitacao: currentDate,
            colaborador: collaborator?.matricula,
          })
            .then((response) => {
              console.log("Solicitação Criada");
            })
            .catch(() => {
              console.log("Solicitação Não FoiCriada");
            });
          createRequest();
        } else {
          console.log("Já solicitou esse ano");
        }
      });
      getHistoryRequests();
  };

  return (
    <Container title="Solicitar Décimo Terceiro ">
      <></>
      <div className={styles.divRequest}>
        <p>Gostaria de antecipar seu décimo terceiro ?</p>
        <Button content="SOLICITAR" size="Big" onClick={handleRequest}></Button>
      </div>
    </Container>
  );
}
