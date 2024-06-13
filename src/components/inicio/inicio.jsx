import style from "../inicio/inicio.module.css";
import GeminiStar from "../../assets/img/geminiStar.png";

const Inicio = () => {
  return (
    <section className={style.Initial}>
      <div className={style.initialWrapper}>
        <div className={style.initialLoader}>
          <img className={style.star1} src={GeminiStar} />
        </div>
        <div className={style.initialTxt}>
          <h2>
            Bem-vindos ao <span className={style.GeminiTxt}>GEMINI</span>{" "}
          </h2>
        </div>
        <div className={style.initialDivBtn}>
          <a href="/home" className={style.btn}>
            Entre
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
