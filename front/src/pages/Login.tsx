import { Button } from "../components/Button";
import { ContainerLogin } from "../components/ContainerLogin";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import account from "../assets/account-green.svg";
import key from "../assets/key.svg";
export function Login() {
  return (
    <div className="App">
      <Header forWho="Login"></Header>
      <div className="content">
        <ContainerLogin>
          <Input icon={account} placeholder="Usuário"></Input>
          <Input icon={key} type="password" placeholder="Senha"></Input>
          <Button content="LOGIN" size="Big"></Button>
        </ContainerLogin>
      </div>
    </div>
  );
}
