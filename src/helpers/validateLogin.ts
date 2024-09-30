import { LoginForm } from "@/interfaces/IForms";

export const validateLogin = (input: {email: string; password: string}) => {

    let errors: LoginForm = {
        email: "",
        password: ""
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.email && !emailRegex.test(input.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (input.email && !input.password) {
    errors.password = "Enter your password"
    }

    return errors;
}

