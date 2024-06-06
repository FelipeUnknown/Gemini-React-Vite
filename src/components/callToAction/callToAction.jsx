import style from "../callToAction/callToAction.module.css";
import GeminiStar from "../../assets/img/geminiStar.png"
const CallToAction = () => {
  return (
    <section className={style.CallToAction}>
      <div className={style.ctaWrapper}>
        <div className={style.ctaContent}>

          <h2>Comece a converversar com o Gemini</h2>
          <div className={style.loader}>
            <img className={style.starStar1} src={GeminiStar}/>
          </div>
          <a
            className={style.btn}
            href="https://gemini.google.com/app"
            target="_blank"
            rel="noreferrer, noopener"
          >
            <strong>COMEÇAR</strong>
            <div id={style.containerStars}>
              <div id={style.stars}></div>
            </div>
            <div id={style.glow}>
              <div className={style.circle}></div>
              <div className={style.circle}></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
