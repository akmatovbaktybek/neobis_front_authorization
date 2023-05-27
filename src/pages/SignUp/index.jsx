const SignUp = () => {
   return (
      <form action="submit" className="form">
         <div className="form__content">
            <div className="form__img">
               <img src="../images/smile.png" alt="" className="form__smile-img" />
            </div>
            <div className="form__content-title">
               Регистрация
            </div>
            <div className="form__inputs">
               <input className="form__gmail-input" type="email" placeholder="Электронная почта" />
            </div>
            <button className="form__button">Далее</button>
         </div>
      </form>
   )
}

export default SignUp;