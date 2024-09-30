"use client"

import { useContext } from "react"
import { AuthContext } from "@/contexts/authContext"
import { useRouter } from "next/navigation"
import IProduct from "@/interfaces/Iproduct"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BuyButtonProps {
    product: IProduct;
}

const BuyButton = ({product}: BuyButtonProps) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();
    const AddedTrue = () => toast.success(`${product.name}  Added to your cart`, {autoClose: 3000 });
    const AddedFalse = () => toast.error(`${product.name} is already in your cart`, {autoClose: 3000 });

    const handleBuy = () => {
        if (!user?.login) {
             router.push("/login")
             } else {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            if (!cart.some((p: IProduct) => p.id === product?.id )) {
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                AddedTrue();
                
            }else{
            AddedFalse()
        }
    }
    }

    return (
        <button className="flex text-sm px-10 py-[7px] text-white rounded-[20px]
cursor-pointer transition-all duration-300 hover:scale-90 bg-tertiary active:scale-105" onClick={handleBuy}>Add to cart</button>
    )
}

export default BuyButton