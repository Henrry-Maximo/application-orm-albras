import albrasORM from "../../assets/albras-orm.png";
import styles from "./style.module.css";

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <img
            src={albrasORM}
            style={{ width: "140px", height: "140px" }}
          ></img>
        </div>
        <form>
          <div>
            <div>
              <label>Usuário:</label>
              <input type="text" placeholder="Usuário" />
            </div>
            <div>
              <label>Senha:</label>
              <input type="text" placeholder="Senha" />
            </div>
          </div>
          <div>
            <div>
              <label>Lembrar de mim.</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Esqueci minha senha.</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
