import { Button } from "../components/Button";
import { ContainerLogin } from "../components/ContainerLogin";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import account from "../assets/account-green.svg";
import key from "../assets/key.svg";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useRequests } from "../hooks/useRequests";
import { getAuthorization } from "../functions/connections/auth";
import { useNavigate } from "react-router-dom";
import { CollaboratorType } from "../types/CollaboratorTypes";
import { URL_LOGIN } from "../constants/constants";
import styles from "./Login.module.css";
import { AuthType } from "../types/AuthType";
import { CollaboratorTypeEnum } from "../enums/collaborator-type";

let con = 0;
export function Login() {
  const [user, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { loading, postRequest } = useRequests();
  const { acessToken, setAcessToken } = useGlobalContext();
  const [collaborator, setCollaborator] = useState<
    CollaboratorType | undefined
  >(undefined);
  const [mensageErrorVisibility, setMensageErrorVisibility] =
    useState("invisible");

  const navigate = useNavigate();
  useEffect(() => {
    const token = getAuthorization();
    if (token && collaborator != undefined) {
      if ((collaborator.typeCollaborator = CollaboratorTypeEnum.Manager)){
        navigate("gestor");
      }
      else if((collaborator.typeCollaborator = CollaboratorTypeEnum.Collaborator)){
        navigate("colaborador");
      }
      else if((collaborator.typeCollaborator = CollaboratorTypeEnum.CollaboratorManager)){
        navigate("colaborador-gestor");
      }
      else if((collaborator.typeCollaborator = CollaboratorTypeEnum.Rh)){
        navigate("rh");
      }
      
    } else {
      con++;
      if (con > 2) setMensageErrorVisibility("visible");
    }
  }, [collaborator]);

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    const auth = await postRequest<AuthType>(URL_LOGIN, {
      matricula: user,
      senha: password,
    });
    console.log(auth);
     setCollaborator(auth.collaborator)
    setAcessToken(auth?.acessToken || "");
  };

  return (
    <div className="App">
      <Header forWho="Login"></Header>
      <div className="content">
        <ContainerLogin loading={loading}>
          <Input
            icon={account}
            placeholder="Usuário"
            onChange={handleUser}
            value={user}
          ></Input>
          <Input
            icon={key}
            type="password"
            placeholder="Senha"
            onChange={handlePassword}
            value={password}
          ></Input>
          <Button content="LOGIN" size="Big" onClick={handleLogin}></Button>
          <span className={` ${styles[mensageErrorVisibility]} `}>
            Usuário ou senha incorretos
          </span>
        </ContainerLogin>
      </div>
    </div>
  );
}
