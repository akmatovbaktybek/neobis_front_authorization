import { Link } from "react-router-dom";

const Login = () => {
   return (
      <form action="submit" className="form">
         <div className="form__content">
            <div className="form__img">
               <img src="../images/smile.png" alt="" className="form__smile-img" />
            </div>
            <div className="form__inputs">
               <input className="form__gmail-input" type="email" placeholder="Электронная почта" />
               <input className="form__password-input" type="password" placeholder="Пароль" />
               <Link className="form__recovery-password" to={"/recoveryPassword"}>Забыли пароль?</Link>
            </div>
            <button className="form__button">Войти</button>
            <Link className="form__signup" to={"/signup"}>Регистрация</Link>
         </div>
      </form>
   )
}

export default Login;