import styles from "./Select.module.css";
interface SelectProps {
  options: string[][];
}
// cada option do array de options é constituido por duas opções, cpf e nome
export function Select({ options }: SelectProps) {
  return (
    <select className={styles.Select}>
      {options.map((option) => {
        return <option key={option[0]} value={option[0]}>{option[1]}</option>;
      })}
    </select>
  );
}
