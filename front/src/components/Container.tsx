import styles from "./css/Container.module.css";

interface ContainerProps {
  title: string;
  children?: any[];
  loading?: boolean;
}


export function Container({
  title,
  children,
  loading
}: ContainerProps) {
    return (
      <div className={styles.container}>
        <span className={styles.titleCenter}>{title}</span>
        <hr></hr>
        {loading ? <div className={styles.loading}></div> : <></>}
        {loading ?  <></> : children}
        
      </div>
    );
}
