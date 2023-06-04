const RecoveryPassword = () => {
   return (
      <form action="submit" className="form">
         <div className="form__content">
            <div className="form__img">
               <img src="../images/smile.png" alt="" className="form__smile-img" />
            </div>
            <div className="form__content-title">
               Сброс пароля
            </div>
            <div className="form__content-text">
               На введенную вами почту мы отправим ссылку, перейдя по которой вы сможете сбросить пароль
            </div>
            <div className="form__inputs">
               <input className="form__gmail-input" type="email" placeholder="Электронная почта" />
            </div>
            <button className="form__button">Далее</button>
         </div>
      </form>
   )
}

export default RecoveryPassword;