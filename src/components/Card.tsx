import styles from "./Card.module.css";
interface CardProps {
  content: string;
  title: string;
  size: "Big" | "Medium" | "Small";
  color?: "Green" | "Red";
  initialDateContent?: string;
}
function setContent(
  content: string,
  initialDateContent: string,
  
) {
  if (initialDateContent != "" ) {
    return (
      
        <div className={styles.divDates}>
            <p>{initialDateContent}</p>
            <p>até</p>
            <p>{initialDateContent}</p>
        </div>
    );
  } else {
     return (
      
        <div className={styles.divContent}>
            {content}
        </div>
    );
  }
}
export function Card({
  title,
  content,
  size,
  color = "Green",
  initialDateContent = "",
}: CardProps) {
  return (
    <div className={`${styles.Card} ${styles[size]} ${styles[color]} `}>
      <span>{title}</span>
      {setContent(content,initialDateContent)}
        
    </div>
  );
}
