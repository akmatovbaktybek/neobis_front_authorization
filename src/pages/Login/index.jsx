import { Link } from "react-router-dom";
import { useFormik } from "formik";
import SmileImg from "components/smileImg";
import { basicSchema } from "schemas";

const Login = () => {
   const onSubmit = async (values, actions) => {
      alert(`
         email: ${values.email}
         password: ${values.password}
      `)
      await new Promise((resolve) => {
         setTimeout(resolve, 1000)
      });
      actions.resetForm();
   }

   const { values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur } = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
   });


   return (
      <form onSubmit={handleSubmit} className="form">
         <div className="form__content">
            <SmileImg />

            <div className="form__inputs">
               <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  className={errors.email && touched.email ? "error-input" : ""}
                  type="email"
                  placeholder="Электронная почта"
               />
               {errors.email && touched.email && <p className="error-message">{errors.email}</p>}
               <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="password"
                  className={errors.password && touched.password ? "error-input" : ""}
                  type="password"
                  placeholder="Пароль"
               />
               {errors.password && touched.password && <p className="error-message">{errors.password}</p>}

               <Link className="form__recovery-password" to={"/recoveryPassword"}>Забыли пароль?</Link>
            </div>
            <button disabled={isSubmitting} type="submit" className={values.password && values.email ? "form-button-active" : "form__button"}>Войти</button>
            <Link className="form__signup" to={"/signup"}>Регистрация</Link>
         </div>
      </form>
   )
}

export default Login;