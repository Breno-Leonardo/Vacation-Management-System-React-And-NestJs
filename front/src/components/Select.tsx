import styles from "./css/Select.module.css";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  optionsDouble?: string[][];
  optionsUnique?: string[] | number[];
  sizeSelect?: "Big" | "Medium" | "Small";
  width?: "Big" | "Medium" | "Small";
}
// cada option do array de options é constituido por duas opções, cpf e nome
export function Select({optionsDouble = [], optionsUnique = [], sizeSelect = "Medium", width = "Big"}: SelectProps) {
  const sizeWidth = "width" + width;
  if (optionsDouble.length > 0) {
    return (
      <select className={`${styles.Select} ${styles[sizeSelect]} ${styles[sizeWidth]}`}>
        {optionsDouble.map((option) => {
          return (
            <option key={option[0]} value={option[0]}>
              {option[1]}
            </option>
          );
        })}
      </select>
    );
  } else {
    return (
      <select className={`${styles.Select} ${styles[sizeSelect]} ${styles[sizeWidth]}`}>
        {optionsUnique.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    );
  }
}
