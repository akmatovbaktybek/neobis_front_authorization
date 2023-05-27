import { Link } from "react-router-dom";

const Login = () => {
   return (
      <form action="submit" className="login-form">
         <div className="login-form__content">
            <div className="login-form__img">
               <img src="../images/smile.png" alt="" className="login-form__smile-img" />
            </div>
            <div className="login-form__inputs">
               <input className="login-form__gmail-input" type="email" placeholder="Электронная почта" />
               <input className="login-form__password-input" type="password" placeholder="Пароль" />
               <Link className="login-form__recovery-password" to={"/recoveryPassword"}>Забыли пароль?</Link>
            </div>
            <button className="login-form__button">Войти</button>
            <Link className="login-form__signup" to={"/signup"}>Регистрация</Link>
         </div>
      </form>
   )
}

export default Login;