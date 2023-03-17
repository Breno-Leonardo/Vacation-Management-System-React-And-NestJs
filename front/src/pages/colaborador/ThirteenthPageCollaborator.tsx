import { Container } from "../../components/Container";
import styles from "./ThirteenthPageCollaborator.module.css";
import { Button } from "../../components/Button";

export function ThirteenthPageCollaborator() {
  return (
    
        <Container title="Solicitar Décimo Terceiro ">
          <></>
          <div className={styles.divRequest}>
            <p>Gostaria de antecipar seu décimo terceiro ?</p>
            <Button content="SOLICITAR" size="Big"></Button>
          </div>
         
        </Container>
      
  );
}
