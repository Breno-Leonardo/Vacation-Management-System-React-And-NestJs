import styles from './EmployeeLine.module.css';
import accountIcon from '../../assets/account.svg';
interface EmployeeLine{
name: string;
balance: string;
vestingPeriod: string;
concessivePeriod: string;
concessiveDeadline: string;
attentionFlag: boolean;
}

function isFlaged(attentionFlag:boolean){
if(attentionFlag)
return <span className={styles.alertSpan}>Atenção</span>
}

export function EmployeeLine({name,balance,vestingPeriod,concessivePeriod, concessiveDeadline, attentionFlag
}:EmployeeLine) {

return (
<div className={styles.employeeLine}>
    <div className={styles.nameDiv}>
        <img className={styles.icon} src={accountIcon}></img>
        <p>{name}</p>
    </div>
    <p>{balance}</p>
    <p>{vestingPeriod}</p>
    <p>{concessivePeriod}</p>
    <div className={styles.alertDiv}>
        <>
            {isFlaged(attentionFlag)}
            {concessiveDeadline}
        </>
    </div>
</div>

)
}