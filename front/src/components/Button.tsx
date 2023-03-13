import styles from "./Buton.module.css"
interface ButtonProps{
    content: string;
    size: "ExtraBig"|"Big"|"Medium"|"Small";
    color?: "Green"|"Red"
}

export function Button({content,size,color="Green"}:ButtonProps){
    return(
        <button className={`${styles.button} ${styles[size]} ${styles[color]}`}>{content}</button>
    )
}