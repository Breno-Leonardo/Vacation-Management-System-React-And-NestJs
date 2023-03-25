import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { URL_CHECK_TOKEN } from "../constants/constants";
import { CollaboratorTypeEnum } from "../enums/collaborator-type";
import { getCollaboratorStorage } from "../functions/connections/auth";
import { useRequests } from "../hooks/useRequests";

export function RHLayout() {
  const { getRequest } = useRequests();
  const navigate = useNavigate();
  useEffect(() => {
    const collaboratorStorage = getCollaboratorStorage();
    //testing if it is valid token
    const verifyToken = async () =>
      await getRequest(URL_CHECK_TOKEN)
        .then((result) => {
          if (result.status === 403) {
            navigate("");
          } else {
            if (collaboratorStorage) {
              if (
                collaboratorStorage.typeCollaborator == CollaboratorTypeEnum.Rh
              ) {
              } else {
                navigate("error");
              }
            } else {
              navigate("error");
            }
          }
        })
        .catch(() => {
          navigate("");
        });
    verifyToken();
  }, []);
  return (
    <div className="App">
      <Header forWho="RH"></Header>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
