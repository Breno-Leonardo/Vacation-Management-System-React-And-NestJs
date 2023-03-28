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
import { VacationRequestBody } from "../../types/VacationRequestType";
import { CollaboratorType } from "../../types/CollaboratoType";


export function TeamPageCollaborator() {
  const { collaborator } = useGlobalContext();
  const { getRequest } = useRequests();
  const [requests, setRequests] = useState<VacationRequestBody[]>();
  const [teamCollaborators, setTeamCollaborators] = useState<CollaboratorType[]>();
  const [loading, setLoading] = useState(true);
  const [go, setGo] = useState(false);
  ///colaborators  team members
  useEffect(() => {
    const getRequests = async () =>
      await getRequest(
        URL_GET_ALL_TEAM_COLLABORATORS + "/" + collaborator?.time.id
      )
        .then((result:CollaboratorType[]) => {
          setTeamCollaborators(result);
        })
        .catch(() => {});
    if (collaborator != undefined) {
      getRequests();
    }
  }, [collaborator]);

  //members requests
  useEffect(() => {
    const getRequestsTeam = async (c:CollaboratorType, isLast:boolean=false) =>
      await getRequest(URL_GET_ALL_VACATION_REQUEST + "/" + c?.matricula)
        .then((result:VacationRequestBody[]) => {
          //merging requests arrays
          setRequests((old: any) => {
            if (old != undefined) {
              return [...old, ...result];
            } else {
              return [...result];
            }
          });
          if(isLast){
            setTimeout(() => {
              setLoading(false);
            }, 100);
          }
        })
        .catch(() => {});

    if (teamCollaborators != undefined) {
      for (let i = 0; i < teamCollaborators.length; i++) {
        const c = teamCollaborators[i];
        if (collaborator != undefined) {
          getRequestsTeam(c, true);
        }
      }
    }
  }, [teamCollaborators]);
  

  

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
