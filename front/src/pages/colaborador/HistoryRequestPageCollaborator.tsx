import { Container } from "../../components/Container";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Topics } from "../../components/Topics";
import {
  formatNameForMobile,
  formatDateRequestTopic,
} from "../../functions/auxFunctions";
import { useEffect, useState } from "react";
import { useRequests } from "../../hooks/useRequests";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { URL_GET_ALL_VACATION_REQUEST } from "../../constants/constants";

interface solicitacao {
  nome: string;
  dataSolicitacao: string;
  inicio: string;
  fim: string;
  status: string;
}
const solicitacoes = [
  {
    nome: "Breno Leonardo Lima Macedo",
    dataSolicitacao: "15/01/2023",
    inicio: "17/01/2023",
    fim: "27/01/2023",
    status: " Aprovada",
  },
  {
    nome: "Breno Leonardo",
    dataSolicitacao: "15/01/2023",
    inicio: "17/01/2023",
    fim: "27/01/2023",
    status: " Aprovada",
  },
];

export function HistoryRequestsPageCollaborator() {
  const { collaborator } = useGlobalContext();
  const { getRequest } = useRequests();
  const [requests, setRequests] = useState();

  useEffect(() => {
    const getRequests = async () =>
      await getRequest(
        URL_GET_ALL_VACATION_REQUEST + "/" + collaborator?.matricula
      )
        .then((result) => {
          console.log("adasdahjfghfghfsd", result);
        })
        .catch(() => {});
    getRequests();
  }, []);
  return (
    <Container title="Histórico de solicitações">
      <></>
      <Topics
        fields={["Nome", formatDateRequestTopic(), "Início", "Fim", "Status"]}
        position="spaced"
      ></Topics>

      {solicitacoes.map((soli) => {
        return (
          <EmployeeLine
            fields={[
              formatNameForMobile(soli.nome),
              soli.dataSolicitacao,
              soli.inicio,
              soli.fim,
              soli.status,
            ]}
            colorsFields={["black", "black", "green", "red", "black"]}
          ></EmployeeLine>
        );
      })}
    </Container>
  );
}
