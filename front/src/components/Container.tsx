import styles from "./css/Container.module.css";

interface ContainerProps {
  title?: string;
  children?: any[];
  loading?: boolean;
  marginTop?: "Normal" | "None";
  marginBottom?: "Normal" | "None";
}

export function Container({
  title,
  children,
  loading,
  marginTop = "Normal",
  marginBottom = "Normal",
}: ContainerProps) {
  const marginBottomCss = "marginBottom" + marginBottom;
  const marginTopCss = "marginTop" + marginTop;
  return (
    <div
      className={`${styles.container} ${styles[marginBottomCss]} ${styles[marginTopCss]}`}
    >
      {title != "" ? (
        <>
          <span className={styles.titleCenter}>{title}</span>
          <hr></hr>
        </>
      ) : (
        <></>
      )}
      {loading ? <div className={styles.loading}></div> : <></>}
      {loading ? <></> : children}
    </div>
  );
}
