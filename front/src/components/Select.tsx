import styles from "./Select.module.css";
interface SelectProps {
  optionsDouble?: string[][];
  optionsUnique?: string[] | number[];
}
// cada option do array de options é constituido por duas opções, cpf e nome
export function Select({ optionsDouble=[],optionsUnique=[] }: SelectProps) {
  
  if(optionsDouble.length>0){
    return (
      <select  className={styles.Select}>
        {optionsDouble.map((option) => {
          return <option key={option[0]} value={option[0]}>{option[1]}</option>;
        })}
      </select>
    );
  }
  
  else{
    return (
      <select className={styles.Select}>
        {optionsUnique.map((option) => {
          return <option key={option} value={option}>{option}</option>;
        })}
      </select>
    );
  }

  
}
