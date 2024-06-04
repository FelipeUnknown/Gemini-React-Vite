import { useState } from "react";
import style from "../header/header.module.css";
import Logo from "../../assets/img/logo.svg";
import MenuBars from "../../assets/img/icon-bars.svg";
import MenuClose from "../../assets/img/icon-close.svg";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const links = [
    { name: "Inicio", link: "/" },
    { name: "Documentação", link: "/" },
    { name: "Tecnologias", link: "/" },
    { name: "Impacto", link: "/" },
  ];
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
      <div className={style.wrapper}>
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
                  <a href="/" className={style.linksMenuLi} key={index}>
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
            <div className={style.navLiDiv2}>
              <li>
                <a className={style.loginBtn} href="/">
                  Login
                </a>
              </li>
              <li>
                <a className={style.registroBtn} href="/">
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
