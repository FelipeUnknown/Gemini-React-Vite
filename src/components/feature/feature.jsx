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
        <h2 className={style.featureTittle}>Tecnologias</h2>
        <div className={style.featureContent}>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={MachineL} />
              </div>
              <h2>Machine Learning</h2>
              <a  className={style.button}
              href="https://cloud.google.com/learn/what-is-machine-learning?hl=pt-br" target="_blank" rel="noreferrer, noopener"
              >
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={DeepL} />
              </div>
              <h2>RNAs</h2>
              <a className={style.button}
              href="https://aws.amazon.com/pt/what-is/neural-network/#:~:text=Uma%20rede%20neural%20é%20um,camadas%2C%20semelhante%20ao%20cérebro%20humano." target="_blank" rel="noreferrer, noopener"
              >
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={BigD} />
              </div>
              <h2>Big Data</h2>
              <a className={style.button}
              href="https://cloud.google.com/learn/what-is-big-data?hl=pt-br" target="_blank" rel="noreferrer, noopener"
              >
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={ComputaçãoN} />
              </div>
              <h2>IaaS </h2>
              <a
                className={style.button}
                href="https://cloud.google.com/learn/what-is-cloud-computing?hl=pt-br#:~:text=Cloud%20Computing%20Foundations%3A-,Definição%20da%20computação%20em%20nuvem,pagarão%20apenas%20pelo%20que%20usarem." target="_blank" rel="noreferrer, noopener"
              >
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardsContent}>
              <div>
                <img src={Pln} />
              </div>
              <h2>PLN</h2>
              <a
                className={style.button}
                href="https://cloud.google.com/learn/what-is-natural-language-processing?hl=pt-br" target="_blank" rel="noreferrer, noopener"
              >
                <div className={style.iconCont}>
                  <span className={style.icon}>🡪</span>
                </div>
                <span className={style.textButton}>Saiba mais</span>
              </a>
            </div>
          </div>
        </div>
        <div className={style.featureText}>
          <h2>Quem sou?</h2>
          <p>
            Sou Gemini, um grande modelo de linguagem do Google AI, treinado em
            um enorme conjunto de dados de texto e código. Geração de Conteúdo:
            Crie textos, scripts, poemas, músicas, e-mails, cartas e muito mais,
            com apenas algumas instruções. Tradução Instantânea: Elimine
            barreiras linguísticas e comunique-se com o mundo todo com precisão
            e fluidez. Respostas Abrangentes: Obtenha respostas completas e
            informativas para suas perguntas, mesmo as mais desafiadoras ou
            complexas. Criatividade Sem Limites: Dê asas à sua imaginação e
            explore novas formas de expressão com a ajuda do Gemini. Sou fruto
            da combinação de tecnologias de ponta em inteligência artificial,
            incluindo: Aprendizado de Máquina Redes Neurais Artificiais (RNAs)
            Big Data Computação em Nuve Processamento de Linguagem Natural (PLN)
            Estou sempre aprendendo e evoluindo, animado para ver o que o futuro
            reserva para mim e para a IA! Ainda estou em desenvolvimento e nem
            sempre posso ser perfeito. Se você tiver algum feedback ou sugestão,
            por favor me avise!
          </p>
        </div>
      </div>
    </section>
  );
};
export default Feature;
