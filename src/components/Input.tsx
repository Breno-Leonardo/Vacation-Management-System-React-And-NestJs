import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  icon?: string;  
  type?: "text"| "date";
  size?: "Big"| "Small" 
  disabled?: boolean; 
}
export function Input({ placeholder, icon="",type="text",size="Big",disabled=false }: InputProps) {
  const sizeIcon="icon"+size;
  return (
    (icon!="")?
    <div>
     <img src={icon} className={`${styles[sizeIcon]}`}></img>
      <input
        type={type}
        className= {`${styles.Input} ${styles[size]}`}
        placeholder={placeholder}
        disabled={disabled}
      ></input>
    </div>
    :
    <div>
      <input
        type={type}
        className= {`${styles.Input} ${styles[size]} ${styles.NoIcon}`}
        placeholder={placeholder}
        disabled={disabled}
      ></input>
    </div>
  );
}
