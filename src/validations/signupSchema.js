import {object, string, ref} from "yup"

export const signupSchema = object({
    email: string().email("Ingrese un mail válido").required("Ingrese un mail"),
    password: string().min(6, "mínimo 6 caracteres").required("Ingrese una contraseña"),
    confirmPassword: string().oneOf([ref("password"), null], "La contraseña debe ser la misma").required("Vuelva a ingresar su contraseña")
})