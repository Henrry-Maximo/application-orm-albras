import { Password, User } from "phosphor-react";
import albrasORM from "../../assets/albras-orm.png";
import styles from "./style.module.css";

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageLogin}>
          <img src={albrasORM} alt="logo orçamento albras"></img>
        </div>
        <form className={styles.formLogin}>
          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <input type="text" required />
              <label>Usuário:</label>
              <User className={styles.svgGroup} size={32} />
            </div>
            <div className={styles.inputWrapper}>
              <input type="text" required />
              <label>Senha:</label>
              <Password className={styles.svgGroup} size={32} />
            </div>
          </div>
          <div className={styles.rememberAndPassword}>
            <div className={styles.wrapperRememberMe}>
              <input type="checkbox" />
              <label>Lembrar de mim.</label>
            </div>
            <div>
              <a href="#">Esqueci minha senha.</a>
            </div>
          </div>
          <button className={styles.accessLogin}>Acessar</button>
          <div className={styles.accessHelpMargin}>
            <a href="#">
              Problemas com{" "}
              <span>
                <strong>acesso</strong>
              </span>
              ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
