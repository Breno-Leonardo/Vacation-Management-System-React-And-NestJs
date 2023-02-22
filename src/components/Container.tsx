import styles from "./Container.module.css";

interface ContainerProps {
  title: string;
  children?: any[];
  titlePosition: "start" | "center";
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
export function Container({ title, titlePosition, children }: ContainerProps) {
  return (
    <div className={styles.container}>
      {titleStyle(title, titlePosition)}
      {children}
    </div>
  );
}
