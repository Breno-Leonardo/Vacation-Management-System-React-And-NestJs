
import { Container } from "../../components/Container";
import styles from "./RemovePage.module.css";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import icon from "../../assets/account.svg";
const options = [
  ["123", "Breno"],
  ["456", "Sofia"],
  ["789", "Adriana"],
];

interface solicitacao {
  nome: string;
  dataSolicitacao: string;
  inicio: string;
  fim: string;
}
const solicitacoes = [
  {
    nome: "Breno Leonardo",
    dataSolicitacao: "15/01/2023",
    inicio: "17/01/2023",
    fim: "27/01/2023",
  },
  {
    nome: "Breno Leonardo",
    dataSolicitacao: "15/01/2023",
    inicio: "17/01/2023",
    fim: "27/01/2023",
  },
];

export function RemovePage() {
  return (
    <Container title="Remover Colaborador">
      <></>
      <div className={styles.divSearch}>
        <span>Matrícula: </span>
        <Input placeholder="Insira a matrícula"size="Medium" type="text"></Input>
      </div>
      <Button content="Pesquisar" size="Big"></Button>
      <div className={styles.infosResult}>
        <img src={icon}></img>
        <>
        <span>Nome: Funcionario</span>
        <span>CPF: 00000000000</span>
        <span>Matrícula: 2323423</span>
        <span>Cargo: Desenvolvedor </span>
        </>
        <Button content="Remover" size="Big" color="Red"></Button>
      </div>

      
    </Container>
  );
}
