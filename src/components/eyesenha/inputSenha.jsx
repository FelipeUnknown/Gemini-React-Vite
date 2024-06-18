import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import style from "../eyesenha/inputSenha.module.css";

const InputSenha = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={style.PasswordDiv}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Digite o sua senha"
        className={style.inputTXT}
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        onClick={handleTogglePassword}
        className={`${style.eyeIcon} ${showPassword ? style.eyeIconSlash : ""}`} // Combine styles for better control
      />
    </div>
  );
};

export default InputSenha;
