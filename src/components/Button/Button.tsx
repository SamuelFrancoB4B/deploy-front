import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface IButton {
    children: React.ReactNode;
    className?: string;
    variant?: "tertiary" | "transparent";
    onClick?: () => void ;
    href?: string
    //type?: ButtonHTMLAttributes<HTMLButtonElement>
}


const Button = ({ children,
    className = "", 
    variant = "tertiary",
    onClick,
    href ="",

    }: IButton) => {

        const variantClass = variant === "tertiary" ? "bg-tertiary" : "bg-transparent";

    return <Link href=""><button className={`
 flex text-sm px-10 py-[7px] text-white rounded-[20px]
cursor-pointer transition-all duration-300 hover:scale-90 ${variantClass} active:scale-105 ${className} `}
onClick={onClick} 
    >{children}</button></Link>
}

export default Button