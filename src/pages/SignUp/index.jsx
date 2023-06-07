import SmileImg from "components/smileImg";
import { useFormik } from "formik";
import { basicSchema } from "schemas";

const SignUp = () => {
   const onSubmit = async (values, actions) => {
      alert(`
         email: ${values.email}
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
            </div>
            <button disabled={isSubmitting} type="submit" className={values.email ? "form-button-active" : "form__button"}>Войти</button>
         </div>
      </form>
   )
}

export default SignUp;