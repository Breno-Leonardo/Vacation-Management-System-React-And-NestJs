
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export function Login() {
  return (
    <div className="App">
      <Header forWho="Login"></Header>
      <div className="content">
        <Container title=" " titlePosition="start">
          <Button content="LOGIN" size="Big" ></Button>
        </Container>
      </div>
    </div>
  );
}
