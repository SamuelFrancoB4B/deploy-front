"use client"
import { useContext } from "react";
import Button from "../Button/Button"
import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import Image from "next/image";
import NotLoggedButtons from "../NotLoggedButtons/NotLoggedButtons";

const LoggedButtons = () => {
    const { user,logout } = useContext(AuthContext);
    if(user?.login) {
  return (
    <div className="flex flex-row justify-around items-center">
        <Button variant="transparent" onClick={logout}>Logout</Button>
        <Link href="/cart"><Image src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png" alt="cart Icon" width={25} height={25} className="w-auto h-auto"/></Link>
    </div>
  )}; return (<NotLoggedButtons/>)
}

export default LoggedButtons