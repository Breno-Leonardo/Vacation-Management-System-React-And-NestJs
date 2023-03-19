import styles from "./css/Container.module.css";

interface ContainerProps {
  title: string;
  children?: any[];
}


export function Container({
  title,
  children,
}: ContainerProps) {
    return (
      <div className={styles.container}>
        <span className={styles.titleCenter}>{title}</span>
        <hr></hr>
        {children}
      </div>
    );
}
