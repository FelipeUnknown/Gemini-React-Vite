import style from "../feature/feature.module.css";
import MachineL from "../../assets/img/ml.svg";
import DeepL from "../../assets/img/dl.svg";
import BigD from "../../assets/img/bd.svg";
import ComputaçãoN from "../../assets/img/ndc.svg";
import Pln from "../../assets/img/pln.svg";
const Feature = () => {
  return (
    <section className={style.Feature}>
      <div className={style.featureWrapper}>
        <h2>Tecnologias</h2>
        <div className={style.featureContent}>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={MachineL} />
              </div>
              <h2>Machine Learning</h2>
              <button className={style.button}>
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </button>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={DeepL} />
              </div>
              <h2>Machine Learning</h2>
              <button className={style.button}>
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </button>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={BigD} />
              </div>
              <h2>Machine Learning</h2>
              <button className={style.button}>
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </button>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={ComputaçãoN} />
              </div>
              <h2>Machine Learning</h2>
              <button className={style.button}>
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </button>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={Pln} />
              </div>
              <h2>Machine Learning</h2>
              <button className={style.button}>
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
