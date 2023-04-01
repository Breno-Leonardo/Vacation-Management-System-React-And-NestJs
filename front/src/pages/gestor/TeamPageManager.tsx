import { Container } from "../../components/Container";
import styles from "./css/TeamPageManager.module.css";
import { EmployeeLine } from "../../components/EmployeeLine";
import { Select } from "../../components/Select";
import {
  formatDate,
  formatNameForMobile,
  isAttentionFlag,
} from "../../functions/auxFunctions";
import { Topics } from "../../components/Topics";
import { ContainerContent } from "../../components/ContainerContent";
import { useEffect, useState } from "react";
import { useRequests } from "../../hooks/useRequests";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import {
  URL_GET_ALL_COLLABORATORS,
  URL_GET_ALL_TEAMS,
} from "../../constants/constants";
import { TeamType } from "../../types/TeamType";
import { CollaboratorType } from "../../types/CollaboratoType";

export function TeamPageManager() {
  const { collaborator } = useGlobalContext();
  const { getRequest } = useRequests();
  const [collaborators, setCollaborators] = useState<CollaboratorType[]>([]);

  const [optionsTeam, setTeamOptions] = useState<any>([]);
  const [team, setTeam] = useState(-1);

  const [updateRequest, setUpdateRequests] = useState(false);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<any>();
  let aquisitiveEnd = "";
  let aquisitiveStart = "";
  let concessiveEnd = "";
  let concessiveStart = "";
  let limitConcessive = new Date();
  //get teams
  useEffect(() => {
    const getTeams = async () =>
      await getRequest(URL_GET_ALL_TEAMS + "/" + collaborator?.matricula)
        .then((result: TeamType[]) => {
          let options: any[] = [];
          result.map((team) => {
            options = [...options, [team.id, team.nome]];
          });
          if (team == -1) {
            setTeam(options[0][0]);
          }
          setTeamOptions(options);
        })
        .catch(() => {});
    if (collaborator != undefined) {
      getTeams();
    }
  }, [collaborator]);

  //get collaborators team
  useEffect(() => {
    const getCollaborators = async () =>
      await getRequest(URL_GET_ALL_COLLABORATORS + "/time/" + team.toString())
        .then((result) => {
          setCollaborators(result);
        })
        .catch(() => {});
    if (team != -1) {
      getCollaborators();
    }
  }, [team]);

  //set requests
  useEffect(() => {
    setContent(
      collaborators.map((c) => {
        if (collaborator != undefined) {
          //aquisitive
          let aux = new Date(c?.fimAquisitivo);
          aux.setUTCDate(aux.getUTCDate() - 1);
          limitConcessive=aux;
          aquisitiveEnd = aux.toUTCString();
          aux = new Date(c?.fimAquisitivo);
          aux.setUTCFullYear(aux.getUTCFullYear() - 1);
          aquisitiveStart = aux.toUTCString();
          //concessive
          if (c.saldoDiasFerias > 0) {
            concessiveStart = aquisitiveStart;
            concessiveEnd = aquisitiveEnd;
          } else {
            aux = new Date(c?.fimAquisitivo);
            aux.setUTCFullYear(aux.getUTCFullYear() + 1);
            aux.setUTCDate(aux.getUTCDate() - 1);
            limitConcessive=aux
            concessiveEnd = aux.toUTCString();
            aux = new Date(c?.fimAquisitivo);
            concessiveStart = aux.toUTCString();
          }
         limitConcessive.setUTCDate(limitConcessive.getUTCDate()-1)
        
          
        }

        setLoading(false);

        return (
          <EmployeeLine
            key={c.matricula}
            fields={[
              formatNameForMobile(c.nome),
              c.saldoDiasFerias.toString(),
              formatDate(aquisitiveStart) + " até " + formatDate(aquisitiveEnd),
              formatDate(concessiveStart) + " até " + formatDate(concessiveEnd),
              formatDate(limitConcessive.toUTCString()),
            ]}
            attentionFlag={isAttentionFlag(limitConcessive.toUTCString())}
          ></EmployeeLine>
        );
      })
    );
  }, [collaborators]);

  const handleTeam = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeam(parseInt(event.target.value));
  };

  return (
    <ContainerContent loading={loading}>
      <Container title="Time">
        <div className={styles.divSearch}>
          <span>Time: </span>
          <Select
            onChange={handleTeam}
            sizeSelect="Medium"
            width="Medium"
            optionsDouble={optionsTeam}
          ></Select>
        </div>
        <Topics
          fields={[
            "Nome",
            "Saldo",
            "Período Aquisitivo",
            "Período Concessivo",
            "Limite Concessivo",
          ]}
          position="spaced"
        ></Topics>

        <ContainerContent>{content}</ContainerContent>
      </Container>
    </ContainerContent>
  );
}
