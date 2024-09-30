import { RegisterForm } from "@/interfaces/IForms";


export const validateRegister = (formData: {name: string, email: string, address: string, phone:string, password: string}) => {
    const errors: RegisterForm = {
        name: "",
        email: "",
        address: "",
        phone: "",
        password: ""
    };

    const nameRegex = /^(?:\S+\s+){1,}\S+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{6,12}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    const addressRegex = /^[A-Za-z0-9\s.,#\-\/]+$/

    if (formData.name && !nameRegex.test(formData.name)) {
        errors.name = "You must enter your full name"
    }

    if (formData.email && !emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (formData.address && !addressRegex.test(formData.address)) {
        errors.address = "Please enter a valid address";
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
        errors.phone = "Must be a number between 6 and 12 digits without periods or commas";
    }

    if (formData.password && !passwordRegex.test(formData.password)) {
        errors.password = "Password must be between 8 and 20 characters, include at least one uppercase letter, one lowercase letter, and one number";
    }


    return errors;
}