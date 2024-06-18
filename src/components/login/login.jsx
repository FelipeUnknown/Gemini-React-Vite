import style from "../login/login.module.css";
import InputSenha from "../eyesenha/inputSenha";
const Login = () => {
  return (
    <section className={style.Login}>
      <div className={style.loginWrapper}>
        <div className={style.loginContent}>
          <div className={style.loginImgLogo}>
            <img
              src="https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif"
              className={style.loginImgStars}
            />
          </div>
          <div className={style.loginFaceDiv}>
            <div className={style.inputTXTDiv}>
              <h2>Ola mundo</h2>
              <input
                type="text"
                placeholder="Digite o seu email"
                className={style.inputTXT}
              ></input>
              <div>
                <InputSenha></InputSenha>
              <p>Esqueceu a senha? <a href="/home"> Clique aqui</a></p>
              </div>
              <div>
                <button type="submit" className={style.entrarBtn}>
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
