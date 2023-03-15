import styles from "./Topics.module.css";
interface Topics {
  fields: string[];
  colorsFields?: string[]; // uma cor para cada field
  position?: "center" | "spaced";
}

function choicePosition(positionCenter: string): string {
  if (positionCenter === "center") return styles.topicsCenter;
  else return styles.topics;
}

export function Topics({fields, colorsFields = [], position = "spaced"}: Topics) {
  return (
    <div className={choicePosition(position)}>
      <>
        {fields.map((field, index) => {
          return (
            <p key={field} className={`${styles[colorsFields[index]]}`}>
              {field}
            </p>
          );
        })}
      </>
    </div>
  );
}
