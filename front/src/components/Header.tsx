import logo from "../assets/logo-quero.svg";
import historyIcon from "../assets/history.svg";
import swapIcon from "../assets/account-arrow-left.svg";
import decimoTerceiroIcon from "../assets/13.svg";
import accountIcon from "../assets/account-white.svg";
import exitIcon from "../assets/exit.svg";
import styles from "./Header.module.css";
import accountGroup from "../assets/account-group-white.svg";
import calendar from "../assets/calendar-month-outline.svg";
import {  Link } from "react-router-dom";

interface HeaderProps {
  forWho: "Colaborador" | "Gestor" | "Login" | "RH" | "Colaborador Gestor";
}


export function Header({ forWho }: HeaderProps) {
  if (forWho == "Colaborador") {
    //Colaborador
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>

        <Link to="/colaborador/solicitacoes">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={calendar}></img>
            <span>Solicitações</span>
          </div>
        </Link>
        <Link to="/colaborador/time">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={accountGroup}></img>
            <span>Time</span>
          </div>
        </Link>
        <Link to="/colaborador/decimo-terceiro">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={decimoTerceiroIcon}></img>
            <span>Décimo Terceiro</span>
          </div>
        </Link>
        <Link to="/colaborador/historico">
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
  } 
  else if (forWho == "Colaborador Gestor") {
    //Colaborador Gestor
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>

        <Link to="/colaborador-gestor/solicitacoes">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={calendar}></img>
            <span>Solicitações</span>
          </div>
        </Link>
        <Link to="/colaborador-gestor/time">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={accountGroup}></img>
            <span>Time</span>
          </div>
        </Link>
        <Link to="/colaborador-gestor/decimo-terceiro">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={decimoTerceiroIcon}></img>
            <span>Décimo Terceiro</span>
          </div>
        </Link>
        <Link to="/colaborador-gestor/historico">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={historyIcon}></img>
            <span>Histórico</span>
          </div>
        </Link>
        <Link to="/gestor/solicitacoes">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={swapIcon}></img>
            <span>Mudar Perfil</span>
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
  } 
  else if (forWho == "Gestor") {
    //Gestor
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>

        <Link to="/gestor/solicitacoes">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={calendar}></img>
            <span>Solicitações</span>
          </div>
        </Link>
        <Link to="/gestor/time">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={accountGroup}></img>
            <span>Time</span>
          </div>
        </Link>
        <Link to="/gestor/historico">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={historyIcon}></img>
            <span>Histórico</span>
          </div>
        </Link>
        <Link to="/colaborador-gestor/solicitacoes">
          <div className={styles.itemMenu}>
            <img className={styles.icon} src={swapIcon}></img>
            <span>Mudar Perfil</span>
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
