import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const basicSchema = yup.object().shape({
   email: yup.string().email("Пожалуйста введите действительный email").required("Обязательное поле"),
   password: yup.string().min(8).matches(passwordRules, { message: "Пароль слишком легкий" }).required("Обязательное поле")
});