import styles from "./EmployeeLine.module.css";
import accountIcon from "../assets/account.svg";
interface EmployeeLine {
  fields: string[];
  colorsFields?: string[]; // uma cor para cada field
  attentionFlag?: boolean;
  positionCenter?: "center" | "spaced";
  hasIcon?: boolean;
}

// retorna a flag de atenção para caso o funcionario esteja em até dois meses da data final do periodo concessivo
function isFlaged(attentionFlag: boolean) {
  if (attentionFlag) return <span className={styles.alertSpan}>Atenção</span>;
}

function choicePosition(positionCenter: string): string {
  if (positionCenter === "center") return styles.employeeLineCenter;
  else return styles.employeeLine;
}

export function EmployeeLine({
  fields,
  attentionFlag = false,
  colorsFields = [],
  positionCenter = "spaced",
  hasIcon = true,
}: EmployeeLine) {
  return (
    <div className={choicePosition(positionCenter)}>
      <>
        {/* Checando se tem que colocar o icone */}
        {hasIcon ? (
          <div className={styles.nameDiv}>
            <img className={styles.icon} src={accountIcon}></img>
            <p className={`${styles[colorsFields[0]]}`}>{fields[0]}</p>
          </div>
        ) : (
          <p className={`${styles[colorsFields[0]]}`}>{fields[0]}</p>
        )}

        {/* Checando se tem que por a flag */}
        {fields.map((field, index) => {
          if (index > 0 && index < fields.length - 1) {
            return (
              <p key={field} className={`${styles[colorsFields[index]]}`}>
                {field}
              </p>
            );
          } else if (index == fields.length - 1) {
            if (attentionFlag) {
              return (
                <div key={field} className={styles.alertDiv}>
                  <>
                    {isFlaged(attentionFlag)}
                    <p className={`${styles[colorsFields[index]]}`}>{field}</p>
                  </>
                </div>
              );
            } else {
              return (
                <p key={field} className={`${styles[colorsFields[index]]}`}>
                  {field}
                </p>
              );
            }
          }
        })}
        
      </>
    </div>
  );
}
