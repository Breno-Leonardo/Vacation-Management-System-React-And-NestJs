import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import account from "../assets/account-green.svg";
import key from "../assets/key.svg";
export function Login() {
  return (
    <div className="App">
      <Header forWho="Login"></Header>
      <div className="content">
        <Container title=" ">
          <Input icon={account} placeholder="Usuário"></Input>
          <Input icon={key} placeholder="Senha"></Input>
          <Button content="LOGIN" size="Big"></Button>
        </Container>
      </div>
    </div>
  );
}
