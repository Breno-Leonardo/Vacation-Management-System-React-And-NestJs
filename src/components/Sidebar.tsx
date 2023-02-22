import accountGroup from '../assets/account-group-white.svg';
import calendar from '../assets/calendar-month-outline.svg';
import styles from './Sidebar.module.css';

const sidebarSmaller= (
<aside className={styles.sidebar}>
  <div className={styles.sideIcons}>
    <img className={styles.icon} src={calendar}></img>
    <img className={styles.icon} src={accountGroup}></img>
  </div>
</aside>
)

const sidebarBigger= (
<aside className={styles.sidebar}>
  <div className={styles.sideIcons}>
    <img className={styles.icon} src={calendar}></img>
    <img className={styles.icon} src={calendar}></img>
    <img className={styles.icon} src={accountGroup}></img>
  </div>
</aside>
)

interface SidebarProps{
  extend: boolean;
}

function isExpanded(extend: boolean){
  if(extend)
    return sidebarBigger
  else
    return sidebarSmaller  
}
export function Sidebar({extend}:SidebarProps) {

return (
  isExpanded(extend)
)
}