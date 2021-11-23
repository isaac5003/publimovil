import { extend } from "vee-validate";
import { required, alpha, email, digits } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "Este campo es requerido."
});

extend("alpha", {
    ...alpha,
    message: "Solo se permiten letras."
});

extend("email", {
    ...email,
    message: "El e-mail no es valido."
});

extend("digits", {
    ...digits,
    message: "Tiene que ser 8 números."
});
