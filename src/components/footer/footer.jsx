import style from "../footer/footer.module.css";
// import XT from "../../assets/img/X.svg";
import Logo from "../../assets/img/logo.svg";
const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.footerWrapper}>
        <div className={style.superriorFooter}>
          <div className={style.foterTxt}>
            <img src={Logo} className={style.footerLogo} />
            <p>
              Gemini, um modelo de linguagem avançado do Google AI, é capaz de
              gerar texto, traduzir idiomas, escrever diferentes tipos de
              conteúdo criativo e responder às suas perguntas de forma
              informativa. Ainda em desenvolvimento, já aprendeu a realizar
              diversos tipos de tarefas
            </p>
          </div>
          <div className={style.footerDivBtns}>
            <div className={style.footerBTNS}>
              <button
                className={style.Btn}
                href="https://github.com/FelipeUnknown"
              >
                <span className={style.svgContainer}>
                  <svg
                    height="30px"
                    width="30px"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </span>
                <span className={style.BG}></span>
              </button>

              <button
                className={style.Btntwit}
                href="https://x.com/googlebrasil/status/1792957682359345440"
              >
                <span className={style.svgContainertwit}>
                  <svg
                    viewBox="0 0 512 512"
                    height="1.7em"
                    xmlns="http://www.w3.org/2000/svg"
                    className={style.svgIcontwit}
                    fill="white"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </span>
                <span className={style.BGtwit}></span>
              </button>
            </div>
            <div className={style.footerBTNS}>
              <button
                className={style.Btninsta}
                href="https://www.instagram.com/gemini/"
              >
                <span className={style.svgContainerinsta}>
                  <svg
                    fill="white"
                    className={style.svgIconinsta}
                    viewBox="0 0 448 512"
                    height="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </span>
                <span className={style.BGinsta}></span>
              </button>

              <button
                className={style.Btnstock}
                href="https://www.facebook.com/geminiaiforads"
              >
                <span className={style.svgContainerstock}>
                  <svg
                    viewBox="0 0 384 512"
                    fill="white"
                    height="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                  </svg>
                </span>
                <span className={style.BGstock}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={style.inferiorFooter}>
          <div>
            <p>© 2024 Google. Todos os direitos reservados.</p>
          </div>
          <div className={style.footerTerms}>
            <a
              className={style.footerINBtn}
              href="https://policies.google.com/privacy?hl=pt-BR&fg=1"
            >
              Politica de Pivacidade
            </a>
            <a
              className={style.footerINBtn}
              href="https://policies.google.com/terms?hl=pt-BR&fg=1"
            >
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
