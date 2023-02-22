import styles from './Container.module.css';
import { EmployeeLine } from './managerTeamPage/EmployeeLine';

const funcionario={
nome:"Breno Leonardo",
saldo:"10",
periodoAquisitivo:"17/01/2023 até 17/01/2024",
periodoConcessivo:"17/01/2022 \n até \n 17/01/2023",
dataLimiteConcessiva:"07/01/2022",
attentionFlag:true
}
const funcionario2={
    nome:"Sofia Lima",
    saldo:"0",
    periodoAquisitivo:"17/01/2023 até 17/01/2024",
    periodoConcessivo:"17/01/2022 \n até \n 17/01/2023",
    dataLimiteConcessiva:"07/01/2022",
    attentionFlag:false
    }

const funcionarios=[funcionario,funcionario2,funcionario,funcionario2,funcionario];


interface ContainerProps{
title: string;
}

export function Container({title}:ContainerProps) {


return (
<div className={styles.container}>
    <span className={styles.title}>{title}</span>
    <hr>
    </hr>

    <div className={styles.topics}>
        <p>Nome</p>
        <p>Saldo</p>
        <p>Período Aquisitivo</p>
        <p>Período Concessivo</p>
        <p>Data Limite Concessiva</p>
    </div>

    {funcionarios.map(f => {
    return <EmployeeLine name={f.nome} balance={f.saldo}
        concessivePeriod={f.periodoConcessivo} vestingPeriod={f.periodoAquisitivo}
        concessiveDeadline={f.dataLimiteConcessiva} attentionFlag={f.attentionFlag}></EmployeeLine>
    })}
   


</div>
)
}