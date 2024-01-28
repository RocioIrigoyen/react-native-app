import {object, string, ref} from "yup"

export const loginSchema = object({
    email: string().email("Ingrese un mail válido").required("Ingrese un mail"),
    password: string().min(6, "mínimo 6 caracteres").required("Ingrese una contraseña")
})