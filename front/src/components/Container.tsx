import styles from "./Container.module.css";

interface ContainerProps {
  title: string;
  children?: any[];
}

function titleStyle(title: string, titlePosition: string) {
  if (titlePosition == "center") {
    return (
      <>
        <span className={styles.titleCenter}>{title}</span>
        <hr></hr>
      </>
    );
  } else {
    return <span className={styles.titleStart}>{title}</span>;
  }
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
