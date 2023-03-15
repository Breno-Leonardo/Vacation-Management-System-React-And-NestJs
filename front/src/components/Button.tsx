import styles from "./Buton.module.css";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  size: "ExtraBig" | "Big" | "Medium" | "Small";
  color?: "Green" | "Red";
  visibility?: "Visible" | "Invisible"
  
}

export function Button({content, size, color = "Green",visibility="Visible",onClick}: ButtonProps) {
  return <button onClick={onClick} className={`${styles.button} ${styles[size]} ${styles[color]} ${styles[visibility]}`}>{content}</button>;
}
