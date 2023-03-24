import styles from "./css/Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder: string;
  icon?: string;
  sizeInput?: "Big" | "Medium" | "Small";
  width?: "Big" | "Medium" | "Small";
  disabled?: boolean;
}
export function Input({placeholder, icon = "", type = "text", sizeInput = "Big", disabled = false, width = "Big", onChange, value}: InputProps) {
  const sizeInputIcon = "icon" + sizeInput;
  const sizeInputWidth = "width" + width;
  return icon != "" ? (
    <div>
      <img src={icon} className={`${styles[sizeInputIcon]}`}></img>
      <input onChange={onChange} value={value} type={type} className={`${styles.Input} ${styles[sizeInput]} ${styles[sizeInputWidth]}`} placeholder={placeholder} disabled={disabled}></input>
    </div>
  ) : (
    <div>
      <input onChange={onChange} value={value} type={type} className={`${styles.Input} ${styles[sizeInput]} ${styles[sizeInputWidth]} ${styles.NoIcon}`} placeholder={placeholder} disabled={disabled}></input>
    </div>
  );
}
