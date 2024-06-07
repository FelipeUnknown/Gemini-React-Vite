import style from "../inicio/inicio.module.css";
import GeminiStar from "../../assets/img/geminiStar.png";

const Inicio = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.loader}>
          <img className={style.starStar1} src={GeminiStar} />
        </div>
        <div className={style.txt}>
          <h2>
            Bem-vindos ao <span className={style.GeminiTxt}>GEMINI</span>{" "}
          </h2>
        </div>
        <div>
          <a href="/home" className={style.btn}>
            Entre
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
