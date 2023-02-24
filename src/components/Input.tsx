import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  icon: string;  
}
export function Input({ placeholder, icon }: InputProps) {
  return (
    <div>
     <img src={icon} className={styles.icon}></img>
      <input
        type="text"
        className={styles.Input}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
