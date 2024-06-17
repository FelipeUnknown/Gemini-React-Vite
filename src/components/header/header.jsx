import { useState } from "react";
import style from "../header/header.module.css";
import Logo from "../../assets/img/logo.svg";
import MenuBars from "../../assets/img/icon-bars.svg";
import MenuClose from "../../assets/img/icon-close.svg";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const links = [
    { name: "Inicio", link: "/" },
    { name: "Documentação", link: "https://ai.google.dev/gemini-api/docs?hl=pt-br" },
    { name: "Tecnologias", link: "https://deepmind.google/technologies/" },
    { name: "Impacto", link: "https://deepmind.google/impact/" },
  ];
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
      <div className={style.headerWrapper}>
        <div>
          <img src={Logo} />
        </div>
        <button id={style.buttonMobile} onClick={toggleMenu}>
          <img
            src={menuActive ? MenuClose : MenuBars}
            id={style.menuIcons}
            alt="Icon menu mobille"
          />
        </button>
        <nav className={style.headerNav}>
          <ul className={style.ulNav} id={style.Menu}>
            <div className={style.navLiDiv}>
              {links.map((link, index) => (
                <li className={style.navLi} key={index}>
                  <a href="" rel="noreferrer, noopener" className={style.linksMenuLi} key={index}>
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
            <div className={style.navLiDiv2}>
              <li>
                <a
                  className={style.loginBtn}
                  href="/LoginPage"
                  rel="noreferrer, noopener"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className={style.registroBtn}
                  href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://www.google.com/webhp?hl%3Dpt-BR%26sa%3DX%26ved%3D0ahUKEwib9uykmMeGAxXSqZUCHXarFuAQPAgJ&ddm=0&dsh=S2048187966:1717684208555871&ec=GAZAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=pt-BR&ifkv=AS5LTATzhly2UsYg7okxyAkDl0HWQ9WXFg7YpYpDSAgHPttlNPtrqX7GWyMzqCHTQI1ZCMVUGRN6UQ&TL=AC3PFD4gGZlugkAW_MeskDnMwsYFYISM1a6eWFfV8O1ULYQKBUqWzqJA9LzHVSyD"
                  rel="noreferrer, noopener"
                >
                  Registro
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
