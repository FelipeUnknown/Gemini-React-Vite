import style from "../hero/hero.module.css";
import img from "../../assets/img/heroImg2.png";

const Hero = () => {
  return (
    <section className={style.Hero}>
      <div className={style.heroWrapper}>
        <div className={style.heroImgDiv}>
          <img src={img} alt="Imagem conseitual de Inteligencia artificial" className={style.heroIgm} />
        </div>
        <div className={style.heroText}>
          <h2>Gemini</h2>
          <p>
            O Gemini é um modelo de linguagem multimodal do Google AI,
            apresentado como sucessor do LaMDA e do PaLM 2. Lançado em dezembro
            de 2023, ele se posiciona como um concorrente do GPT-4 da OpenAI e
            oferece recursos inovadores.
          </p>
          <div>
            <a href="https://deepmind.google/impact/"target="_blank" rel="noreferrer, noopener" className={style.bntImpacto}>Impacto</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
