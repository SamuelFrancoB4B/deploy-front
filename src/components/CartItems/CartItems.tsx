"use client"

import Image from "next/image"
import IProduct from "@/interfaces/Iproduct";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItems = () => {
    const { user } = useContext(AuthContext);
    const BuyTrue = () => toast.success("Your order is Success", {autoClose: 3000 });
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart") || "[]")
    );
    const total = cart.reduce((acc: number, product: IProduct) => acc + product.price, 0);

    const removeFromCart = (productId: number) => {
        const updatedCart = cart.filter((product: IProduct) => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleOrder = () => {
        const url = process.env.NEXT_PUBLIC_API_URL + "/orders" || "http://localhost:3000/orders";
        const products = cart.map((product: IProduct) => product.id);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": user?.token as string,
            },
            body: JSON.stringify({
                userId: user?.user.userId,
                products: products,
            })
        })
            .then(res => res.json())
            .then((json) => {
                localStorage.setItem("cart", JSON.stringify([]));
                setCart([]);
                BuyTrue()
            })
            .catch(error => console.error(error))
    }

    const cartLength = cart.length === 0;

    return (
        <>
            <div className="padding-section mb-20">
                <h1>Cart</h1>
                {cartLength ? (
                    <p className="text-gray-500 pt-28">Your cart is empty.</p>
                ) : (
                    <div className="bg-slate-300 w-full rounded-3xl px-4 py-2 my-1 ">

                        {cart.map((product: IProduct, i: number) => (
                            <div key={i} className="flex align-middle items-center justify-between my-2">
                                <div className="flex items-center gap-4">
                                    <button className="text-red-500 hover:text-red-700 font-bold" onClick={() => removeFromCart(product.id)}>X</button>
                                    <Image src={product.image} alt="hola" width={50} height={50} className=" rounded-sm" />
                                    <h4>{product.name}</h4>
                                </div>
                                <h4>{`$ ${product.price}`}</h4></div>
                        ))
                        }
                    </div>
                )}
            </div>
            {!cartLength && (
                <>
                    <div className="flex align-middle items-center justify-between border-t-[3px] border-black pt-4">
                        <h3>TOTAL</h3>
                        <h3>${total}</h3>
                    </div>
                    <div className="flex justify-center pb-20">
                        <button className="flex text-sm px-10 py-[7px] text-white rounded-[20px]
                cursor-pointer transition-all duration-300 hover:scale-90 bg-tertiary active:scale-105" onClick={handleOrder}>Buy</button>
                    </div></>)}
        </>
    )
}

export default CartItems