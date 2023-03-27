import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import styles from "./css/TeamPageCollaborator.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Topics } from "../../components/Topics";
import {
  formatDate,
  formatDateRequestTopic,
  formatNameForMobile,
} from "../../functions/auxFunctions";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useRequests } from "../../hooks/useRequests";
import { useEffect, useState } from "react";
import {
  URL_GET_ALL_TEAM_COLLABORATORS,
  URL_GET_ALL_VACATION_REQUEST,
} from "../../constants/constants";

const solicitacao = {
  nome: "Breno Leonardo",
  dataSolicitacao: "15/01/22",
  inicio: "17/01/22",
  fim: "27/01/22",
  status: "Em Aberto",
  dataLimiteConcessiva: "26/02/22",
  attentionFlag: false,
};

const solicitacoes = [solicitacao, solicitacao, solicitacao];
export function TeamPageCollaborator() {
  const { collaborator } = useGlobalContext();
  const { getRequest } = useRequests();
  const [requests, setRequests] = useState<any>();
  const [teamCollaborators, setTeamCollaborators] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [go, setGo] = useState(false);
  ///colaborators  team members
  useEffect(() => {
    const getRequests = async () =>
      await getRequest(
        URL_GET_ALL_TEAM_COLLABORATORS + "/" + collaborator?.time.id
      )
        .then((result) => {
          setTeamCollaborators(result);
        })
        .catch(() => {});
    if (collaborator != undefined) {
      getRequests();
    }
  }, [collaborator]);

  //members requests
  useEffect(() => {
    const getRequestsTeam = async (c: any) =>
      await getRequest(URL_GET_ALL_VACATION_REQUEST + "/" + c?.matricula)
        .then((result) => {
          //merging requests arrays
          setRequests((old: any) => {
            if (old != undefined) {
              return [...old, ...result];
            } else {
              return [...result];
            }
          });
        })
        .catch(() => {});

    if (teamCollaborators != undefined) {
      for (let i = 0; i < teamCollaborators.length; i++) {
        const c = teamCollaborators[i];
        if (collaborator != undefined) {
          getRequestsTeam(c);
        }
        //getting the latest requests
        if (i == teamCollaborators.length - 1) {
          setLoading(false);
        }
      }
    }
  }, [teamCollaborators]);
  console.log("os requestes", requests);

  // //requests prontos
  // useEffect(() => {
  //   console.log("os requestes", requests);
  // }, [requests]);

  return (
    <Container loading={loading} title="Solicitações e Férias do Time">
      <Topics
        fields={["Nome", formatDateRequestTopic(), "Início", "Fim", "Status"]}
        position="spaced"
      ></Topics>

      {requests != undefined ? (
        requests.map((soli: any) => {
          return (
            <EmployeeLine
              fields={[
                formatNameForMobile(soli.colaborador.nome),
                formatDate(soli.dataSolicitacao),
                formatDate(soli.dataInicio),
                formatDate(soli.dataTermino),
                soli.statusSolicitacao,
              ]}
              colorsFields={["black", "black", "green", "red", "black"]}
            ></EmployeeLine>
          );
        })
      ) : (
        <></>
      )}
    </Container>
  );
}
