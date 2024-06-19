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
        <form>
          <div>
            <div>
              <label>Usuário:</label>
              <input type="text" />
              <User size={32} />
            </div>
            <div>
              <label>Senha:</label>
              <input type="text" />
              <Password size={32} />
            </div>
          </div>
          <div>
            <div>
              <input type="checkbox" />
              <label>Lembrar de mim.</label>
            </div>
            <div>
              <label>Esqueci minha senha.</label>
            </div>
          </div>
          <div>
            <button>Acessar</button>
          </div>
          <div>
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
