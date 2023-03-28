import styles from "./css/Card.module.css";
interface CardProps {
  content: string;
  title: string;
  size: "Big" | "Medium" | "Small";
  color?: "Green" | "Red";
  icon?: string;
  miniIcon?: string;
  initialDateContent?: string;
  finalDateContent?: string;
}
function setContent(content: string, initialDateContent: string,finalDateContent:string) {
  if (initialDateContent != "") {
    return (
      <div className={styles.divDates}>
        <p>{initialDateContent}</p>
        <p>até</p>
        <p>{finalDateContent}</p>
      </div>
    );
  } else {
    return <div className={styles.divContent}>{content}</div>;
  }
}

export function Card({title, content, size, color = "Green", icon = "", miniIcon = "", initialDateContent = "", finalDateContent=""}: CardProps) {
  return icon != "" ? (
    <div className={`${styles.Card} ${styles[size]} ${styles[color]} `}>
      <img className={styles.icon} src={icon}></img>
      <span>{title}</span>
    </div>
  ) : (
    <div className={`${styles.Card} ${styles[size]} ${styles[color]} `}>
      <span>{title}</span>
      {setContent(content, initialDateContent,finalDateContent)}
    </div>
  );
}
