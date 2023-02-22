import logo from '../assets/logo-quero.svg';
import historyIcon from '../assets/history.svg';
import accountIcon from '../assets/account-white.svg';
import exitIcon from '../assets/exit.svg';
import styles from './Header.module.css';
import accountGroup from '../assets/account-group-white.svg';
import calendar from '../assets/calendar-month-outline.svg';

export function Header() {

return (
<header className={styles.header}>

  <img className={styles.logo} src={logo}></img>


  <div className={styles.itemMenu}>
    <img className={styles.icon} src={calendar}></img>
    <span>Solicitações</span>
  </div>
  <div className={styles.itemMenu}>
    <img className={styles.icon} src={accountGroup}></img>
    <span>Time</span>
  </div>
  <div className={styles.itemMenu}>
    <img className={styles.icon} src={historyIcon}></img>
    <span>Histórico</span>
  </div>

  <div className={styles.menuAccount}>
    <div className={styles.account}>
      <img className={styles.icon} src={accountIcon}></img>
      <span>Breno Leonardo</span>
    </div>
    <div className={styles.exit}>
      <img className={styles.icon} src={exitIcon}></img>
      <span>Sair</span>
    </div>
  </div>




</header>
)
}