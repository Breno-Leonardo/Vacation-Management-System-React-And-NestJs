import styles from "./css/TextArea.module.css";
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  
  placeholder: string;
}

export function TextArea({ placeholder }: TextAreaProps) {
  return (
    <div className={styles.divForText}>
    <span>Mensagem</span>
      <textarea className={styles.TextArea} placeholder={placeholder}></textarea>
    </div>
    // <button className={`${styles.button} ${styles[size]} ${styles[color]}`}>{content}</button>
  );
}
