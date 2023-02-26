import logo from "../assets/logo-quero.svg";
import historyIcon from "../assets/history.svg";
import decimoTerceiroIcon from "../assets/13.svg";
import accountIcon from "../assets/account-white.svg";
import exitIcon from "../assets/exit.svg";
import styles from "./Header.module.css";
import accountGroup from "../assets/account-group-white.svg";
import calendar from "../assets/calendar-month-outline.svg";
import { Routes, Route, Link } from "react-router-dom";

interface HeaderProps {
  forWho: "Colaborador" | "Gestor" | "Login" | "RH";
}
const content = "";

export function Header({ forWho }: HeaderProps) {
  if (forWho == "Colaborador") {
    //Colaborador
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>

        <Link to="/pagina-de-solicitacoes-colaborador">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={calendar}></img>
            <span>Solicitações</span>
          </div>
        </Link>
        <Link to="/pagina-do-time-colaborador">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={accountGroup}></img>
            <span>Time</span>
          </div>
        </Link>
        <Link to="/pagina-de-historico-solicitacoes-colaborador">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={decimoTerceiroIcon}></img>
            <span>Décimo Terceiro</span>
          </div>
        </Link>
        <Link to="/pagina-de-historico-solicitacoes-colaborador">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={historyIcon}></img>
            <span>Histórico</span>
          </div>
        </Link>

        <div className={styles.menuAccount}>
          <div className={styles.account}>
            <img className={styles.icon} src={accountIcon}></img>
            <span>Breno Leonardo</span>
          </div>
          <Link to="/login">
            <div className={styles.exit}>
              <img className={styles.icon} src={exitIcon}></img>
              <span>Sair</span>
            </div>
          </Link>
        </div>
      </header>
    );
  } else if (forWho == "Gestor") {
    //Gestor
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>

        <Link to="/pagina-de-solicitacoes-gestor">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={calendar}></img>
            <span>Solicitações</span>
          </div>
        </Link>
        <Link to="/pagina-do-time-gestor">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={accountGroup}></img>
            <span>Time</span>
          </div>
        </Link>
        <Link to="/pagina-de-historico-solicitacoes-gestor">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={historyIcon}></img>
            <span>Histórico</span>
          </div>
        </Link>

        <div className={styles.menuAccount}>
          <div className={styles.account}>
            <img className={styles.icon} src={accountIcon}></img>
            <span>Breno Leonardo</span>
          </div>
          <Link to="/login">
            <div className={styles.exit}>
              <img className={styles.icon} src={exitIcon}></img>
              <span>Sair</span>
            </div>
          </Link>
        </div>
      </header>
    );
  } else if (forWho == "RH") {
    //RH
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>
        <div className={styles.menuAccount}>
          <div className={styles.account}>
            <img className={styles.icon} src={accountIcon}></img>
            <span>Breno Leonardo</span>
          </div>
          <Link to="/login">
            <div className={styles.exit}>
              <img className={styles.icon} src={exitIcon}></img>
              <span>Sair</span>
            </div>
          </Link>
        </div>
      </header>
    );
  } else {
    //login
    return (
      <header className={styles.headerLogin}>
        <img className={styles.logoLogin} src={logo}></img>
      </header>
    );
  }
}
