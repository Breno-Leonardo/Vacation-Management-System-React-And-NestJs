import styles from "./Input.module.css";

interface InputProps {
  placeholder: string;
  icon?: string;
  type?: "text" | "date";
  size?: "Big" | "Medium" | "Small";
  width?: "Big" | "Medium" | "Small";
  disabled?: boolean;
}
export function Input({placeholder, icon = "", type = "text", size = "Big", disabled = false, width = "Big"}: InputProps) {
  const sizeIcon = "icon" + size;
  const sizeWidth = "width" + width;
  return icon != "" ? (
    <div>
      <img src={icon} className={`${styles[sizeIcon]}`}></img>
      <input type={type} className={`${styles.Input} ${styles[size]} ${styles[sizeWidth]}`} placeholder={placeholder} disabled={disabled}></input>
    </div>
  ) : (
    <div>
      <input type={type} className={`${styles.Input} ${styles[size]} ${styles[sizeWidth]} ${styles.NoIcon}`} placeholder={placeholder} disabled={disabled}></input>
    </div>
  );
}
