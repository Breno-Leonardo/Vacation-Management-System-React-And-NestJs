import styles from "./ContainerLogin.module.css";

interface ContainerProps {
  children?: any[];
}


export function ContainerLogin({
  children,
}: ContainerProps) {
    return (
      <div className={styles.containerCenter}>
        {children}
      </div>
    );
}
